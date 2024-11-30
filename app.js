const lights = document.querySelectorAll('.light');


function activateLight(color) {
   
    lights.forEach(light => light.classList.remove('active'));

    
    const selectedLight = document.querySelector(`.${color}`);
    if (selectedLight) {
        selectedLight.classList.add('active');
    }
}
