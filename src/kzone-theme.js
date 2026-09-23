/* The sandboxed document only changes presentation; the parent persists a theme. */
(()=>{
 const button=document.getElementById('kz-theme-toggle');
 function apply(value){const theme=value==='dark'?'dark':'light';document.documentElement.dataset.kzTheme=theme;button.querySelector('span').textContent=theme==='dark'?'Dark':'Light';button.setAttribute('aria-label','Switch to '+(theme==='dark'?'light':'dark')+' appearance');button.setAttribute('aria-pressed',String(theme==='dark'));}
 apply('light');
 button.addEventListener('click',()=>{const value=document.documentElement.dataset.kzTheme==='dark'?'light':'dark';apply(value);window.parent.postMessage({type:'pe-kzone-theme-save',value},'*');});
 window.addEventListener('message',e=>{if(e.source===window.parent&&e.data?.type==='pe-kzone-theme-loaded')apply(e.data.value);});
 window.parent.postMessage({type:'pe-kzone-theme-load'},'*');
})();
