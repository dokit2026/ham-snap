const paths={
 menu:'<path d="M6 9h18M6 15h18M6 21h18"/>',
 trash:'<path d="M6 8h18M11 5h8M8 8l1 19h12l1-19M13 12v10m4-10v10"/><path d="M10 9h10v16H10z" fill="var(--icon-fill)" stroke="none"/>',

 camera:'<path d="M5 8h4l2-3h6l2 3h3v14H5z" fill="var(--icon-fill)"/><circle cx="13.5" cy="15" r="4.3" fill="white"/><path d="M20 11h.1"/>',
 photo:'<rect x="5" y="4" width="19" height="21" rx="3" fill="var(--icon-fill)"/><path d="M9 20l4-5 3 3 3-4 3 6"/><circle cx="11" cy="10" r="2" fill="white"/><path d="M2 8v18h18"/>',
 hamster:'<circle cx="8" cy="7" r="4" fill="var(--icon-fill)"/><circle cx="22" cy="7" r="4" fill="var(--icon-fill)"/><path d="M4 16c0-7 4-10 11-10s11 3 11 10c0 8-5 10-11 10S4 24 4 16" fill="var(--icon-fill)"/><path d="M5 18c2-4 6-3 10-1 4-2 8-3 10 1-1 6-5 7-10 7S6 24 5 18" fill="white" stroke="none"/><circle cx="10" cy="14" r="1.3" fill="currentColor" stroke="none"/><circle cx="20" cy="14" r="1.3" fill="currentColor" stroke="none"/><path d="M13 19h4l-2 2z" fill="currentColor"/><path d="M11 22l2 1 2-2 2 2 2-1"/>',
 sofa:'<path d="M7 16V8q0-3 3-3h10q3 0 3 3v8" fill="var(--icon-fill)"/><rect x="3" y="13" width="6" height="11" rx="2" fill="var(--icon-fill)"/><rect x="21" y="13" width="6" height="11" rx="2" fill="var(--icon-fill)"/><path d="M9 18h12v6H9z" fill="var(--icon-fill)"/><path d="M7 24v3m16-3v3M15 6v11"/>',
 home:'<path d="M3 14L15 3l12 11M6 12v14h18V12" fill="var(--icon-fill)"/><path d="M12 26v-9h6v9" fill="white"/>',
 phone:'<rect x="10" y="4" width="12" height="22" rx="3" fill="var(--icon-fill)"/><path d="M14 7h4m-3 16h2M6 8Q0 15 6 22m-1-5 1 5-5-1M26 6q5 5 2 10"/>',
 center:'<path d="M4 11V5h6m10 0h6v6M4 20v6h6m10 0h6v-6M15 10v10m-5-5h10"/><circle cx="15" cy="15" r="2" fill="var(--icon-fill)"/>',
 seed:'<path d="M15 2C8 6 5 14 7 21q3 7 8 7t8-7C25 14 22 6 15 2z" fill="#899087"/><path d="M15 5v20M11 9l-1 12m9-12 1 12" stroke="#fff8e5"/>',
 carrot:'<path d="M12 10C8 10 6 14 8 17l-5 11 14-7c4-2 5-6 2-9z" fill="#f79c50"/><path d="M18 10l2-7m0 9 7-4m-8 3 7-8" stroke="#6eab7c"/><path d="M9 14l3 2m0 4 3 1" stroke="#cc6b25"/>',
 pellet:'<path d="M5 9l5-3 7 5v7l-5 3-7-5z" fill="#c69c6e"/><path d="M5 9l7 5 5-3m-5 3v7"/><path d="M17 19l5-3 5 4v5l-5 3-5-4z" fill="#d6b58d"/><path d="M17 19l5 4 5-3m-5 3v5"/>',
 feed:'<path d="M3 23h8l5 3h8l4-5q1-3-2-3l-6 3h-6m-4-5 7 1q4 1 3 4h-8l-5-3H3" fill="var(--icon-fill)"/><path d="M15 2c-4 3-5 6-3 8s5 1 6-1-1-5-3-7" fill="#e9bf7e"/><path d="M15 4v4"/>',
 download:'<path d="M15 3v16m-6-6 6 6 6-6M5 21v6h20v-6"/>',
 check:'<path d="M5 15l7 7L26 7" stroke-width="3"/>',
 back:'<path d="M14 5 4 15l10 10M5 15h21"/>',
 rotate:'<path d="M24 10A10 10 0 1 0 25 20M24 3v8h-8"/><path d="M12 12h7v7h-7z" fill="var(--icon-fill)"/>',
 undo:'<path d="M10 7 3 13l7 6M4 13h13q9 0 9 10"/>',
 palette:'<path d="M15 3C7 3 2 8 2 16c0 7 8 13 13 10 3-2-3-4 0-7 2-2 9 2 12-3 3-6-4-13-12-13z" fill="var(--icon-fill)"/><circle cx="9" cy="10" r="1.8" fill="#e9a6ba"/><circle cx="16" cy="8" r="1.8" fill="#a9b6e6"/><circle cx="22" cy="12" r="1.8" fill="#a6d5bb"/><circle cx="7" cy="17" r="1.8" fill="#edce86"/>',
 rug:'<path d="M3 12 17 4l11 11-14 10z" fill="var(--icon-fill)"/><path d="m3 16 11 11m-9-9-3 2m7 2-3 2m9-1 11-7"/>',
 wheel:'<circle cx="15" cy="13" r="10" fill="var(--icon-fill)"/><circle cx="15" cy="13" r="2" fill="white"/><path d="M15 3v8m0 4v8M5 13h8m4 0h8M8 6l5 5m4 4 5 5M8 20l5-5m4-4 5-5M15 23v4M8 28h14"/>',
 table:'<ellipse cx="15" cy="10" rx="12" ry="6" fill="var(--icon-fill)"/><path d="M6 13v13m18-13v13M15 16v9"/>',
 plant:'<path d="M8 19h14l-3 9h-8z" fill="var(--icon-fill)"/><path d="M15 19V7M15 13C4 13 3 6 5 4c7 0 10 4 10 9M15 16c10 0 13-7 10-10-7 0-10 5-10 10" fill="#a3cfaf"/>',
 shelf:'<path d="M4 3h22v25H4zM4 15h22"/><path d="M8 6h4v8H8zm6 1h4v7h-4zm6-1h3v8h-3zM8 19h5v8H8zm7-1h7v9h-7z" fill="var(--icon-fill)"/>',
 wall:'<path d="M4 4h22v23H4z" fill="var(--icon-fill)"/><path d="M4 12h22M4 20h22M12 4v8m8 0v8m-8 0v7"/>',
 floor:'<path d="M2 21 15 8l13 13-13 7z" fill="var(--icon-fill)"/><path d="m7 16 13 9m-9-13 13 9M6 24l13-13m-5 16 10-10"/>',
 arrowLeft:'<path d="M24 15H5m8-8-8 8 8 8"/>',arrowRight:'<path d="M6 15h19m-8-8 8 8-8 8"/>',arrowUp:'<path d="M15 25V5m-8 8 8-8 8 8"/>',arrowDown:'<path d="M15 5v20m-8-8 8 8 8-8"/>'
};
export function icon(name,size=28){return `<svg class="picto" width="${size}" height="${size}" viewBox="0 0 30 30" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]||paths.home}</svg>`}
export function setIconButton(el,name,label,caption='',extra=''){el.setAttribute('aria-label',label);el.title=label;el.innerHTML=icon(name)+(caption?`<span class="iconCaption">${caption}</span>`:'')+extra;el.classList.add('iconButton')}
export function furnitureIcon(id){if(id.startsWith('wall'))return'wall';return({sofa:'sofa',rug:'rug',house:'home',wheel:'wheel',table:'table',plants:'plant',shelf:'shelf','room-floor':'floor'})[id]||'home'}
