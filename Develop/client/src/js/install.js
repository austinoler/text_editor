const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;


window.addEventListener('beforeinstallprompt', (event) => {
  
  event.preventDefault();
  
  deferredPrompt = event;
  
  butInstall.style.display = 'block';
});


butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    
    deferredPrompt.prompt();
    
    const choiceResult = await deferredPrompt.userChoice;
    
    deferredPrompt = null;
    
    butInstall.style.display = 'none';
  }
});


window.addEventListener('appinstalled', (event) => {
  
  console.log('App installed:', event);
});

