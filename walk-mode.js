import {setIconButton} from './icons.js';
export function setupWalkMode({renderer,app,button,notice,onStart,onEnd}){
 let session=null;
 setIconButton(button,'phone','歩いて撮影を開始する','歩いて撮影');
 button.onclick=async()=>{
  if(session){await session.end();return}
  if(!navigator.xr||!renderer.xr){notice('このブラウザは歩行の位置追跡に対応していません。対応するARブラウザ・端末が必要です。');return}
  button.disabled=true;
  try{
   if(!await navigator.xr.isSessionSupported('immersive-ar')){notice('この端末では歩行の位置追跡を利用できません。通常の撮影はそのまま遊べます。');return}
   session=await navigator.xr.requestSession('immersive-ar',{requiredFeatures:['local-floor','dom-overlay'],domOverlay:{root:app}});
   session.addEventListener('end',()=>{session=null;app.classList.remove('walking');setIconButton(button,'phone','歩いて撮影を開始する','歩いて撮影');onEnd()},{once:true});
   renderer.xr.enabled=true;renderer.xr.setReferenceSpaceType('local-floor');await renderer.xr.setSession(session);
   app.classList.add('walking');setIconButton(button,'home','歩行撮影を終了する','歩行撮影を終了');onStart();
  }catch(error){if(session){try{await session.end()}catch{}}session=null;notice(error.name==='NotAllowedError'?'カメラ・位置追跡が許可されませんでした。メニューからもう一度開始できます。':'歩行撮影を開始できませんでした。通常の撮影をご利用ください。');}
  finally{button.disabled=false}
 };
 app.addEventListener('beforexrselect',e=>{if(e.target.closest?.('button,input,select,.overlay'))e.preventDefault()});
}
