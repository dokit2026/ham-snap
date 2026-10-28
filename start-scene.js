import * as T from './three.module.js';
import {buildHamster} from './real-hamster.js';
export async function createStartScene(){
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(42,1,.1,50);
 scene.add(new T.HemisphereLight(0xffffff,0xa35923,2.5));const light=new T.DirectionalLight(0xfff8ed,3);light.position.set(-3,6,5);scene.add(light);
 const material=c=>new T.MeshStandardMaterial({color:c,flatShading:true,roughness:.7});const white=material(0xfff5e8),peach=material(0xffc48c);
 function box(w,h,d,x,y,z,mat,parent=scene){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);parent.add(m);return m}
 const halo=new T.Mesh(new T.CircleGeometry(2.2,64),new T.MeshBasicMaterial({color:0xf29448,depthWrite:false}));halo.position.set(0,1.8,-1.2);scene.add(halo);
 const shadow=new T.Mesh(new T.CircleGeometry(1,48),new T.MeshBasicMaterial({color:0xd97527,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.scale.set(1.8,.75,1);shadow.position.set(0,-.045,0);scene.add(shadow);
 const wheel=new T.Group();wheel.position.y=1.8;scene.add(wheel);
 for(const z of [-.36,.36]){const ring=new T.Mesh(new T.TorusGeometry(1.65,.095,8,48),white);ring.position.z=z;wheel.add(ring)}
 for(let i=0;i<32;i++){const a=i*Math.PI/16;const slat=box(.13,.07,.75,Math.cos(a)*1.65,Math.sin(a)*1.65,0,peach,wheel);slat.rotation.z=a+Math.PI/2}
 for(let i=0;i<6;i++){const a=i*Math.PI/3;const spoke=box(.055,1.63,.055,Math.sin(a)*.82,Math.cos(a)*.82,-.39,white,wheel);spoke.rotation.z=-a}
 box(.16,1.8,.16,0,.9,-.56,white);box(2.2,.13,1.2,0,.05,-.25,white);
 const rig=await buildHamster();rig.ham.scale.setScalar(.85);rig.ham.rotation.y=1.12;scene.add(rig.ham);
 // Faceted sunflower shells with lengthwise cream stripes, rendered as real meshes.
 const seedGeometry=new T.LatheGeometry([new T.Vector2(.025,-.25),new T.Vector2(.1,-.22),new T.Vector2(.145,-.1),new T.Vector2(.14,.03),new T.Vector2(.095,.17),new T.Vector2(0,.32)],12);
 const colors=[],position=seedGeometry.attributes.position;
 for(let i=0;i<position.count;i++){const angle=Math.atan2(position.getX(i),position.getZ(i));const stripe=Math.cos(angle*6)>.55;const c=new T.Color(stripe?0xf5e3bb:0x69675b);colors.push(c.r,c.g,c.b)}
 seedGeometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));const seedMaterial=new T.MeshStandardMaterial({color:0xffffff,vertexColors:true,flatShading:true,roughness:.85});
 scene.add(camera);const fallingSeeds=[];for(let i=0;i<6;i++){const seed=new T.Mesh(seedGeometry,seedMaterial);seed.scale.set(.48,.48,.26);camera.add(seed);fallingSeeds.push(seed)}
 return{render(renderer,t,width,height){rig.pose(4,t);rig.ham.position.set(.02,.22+Math.sin(t*19)*.035,.12);rig.ham.rotation.z=-.13;rig.feet.forEach((f,i)=>{f.rotation.x=Math.sin(t*20+i*2)*.45});wheel.rotation.z=-t*2.2;camera.aspect=width/height;camera.updateProjectionMatrix();camera.position.set(2,2.7,Math.max(7,2.1/Math.tan(Math.PI*42/360)/camera.aspect));camera.lookAt(0,1.65,0);const halfHeight=5*Math.tan(T.MathUtils.degToRad(21)),halfWidth=halfHeight*camera.aspect;fallingSeeds.forEach((seed,i)=>{const elapsed=t+3-i*3;seed.visible=elapsed>=0;if(!seed.visible)return;const age=(elapsed%18)/18;const side=i%2?1:-1;seed.position.set(side*(.73+.12*Math.sin(age*5+i))*halfWidth,(1.3-age*2.6)*halfHeight,-5-.15*(i%3));seed.rotation.set(t*.38+i,t*.55+i*1.3,t*.3+i);});renderer.setClearColor(0xed812d);renderer.render(scene,camera)}};
}
