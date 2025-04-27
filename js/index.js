import router from './router.js';

addEventListener('DOMContentLoaded', () => {
    router.init();
});

document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('download-cv-btn');
    
    downloadButton.addEventListener('click', () => {
      window.open('./resources/CVLuisSantos.pdf', '_blank');
    });
  });