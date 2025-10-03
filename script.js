// script.js - small enhancement
console.log("Website wrapper loaded.");
// simple keyboard shortcut: press 'e' to open embedded document in a new tab
window.addEventListener('keydown', (e) => {
  if(e.key === 'e' || e.key === 'E'){
    const iframe = document.querySelector('.svg-embed iframe');
    if(iframe && iframe.src) window.open(iframe.src, '_blank');
  }
});
