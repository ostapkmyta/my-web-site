const fb = document.querySelector('.logos .fb');
const inst = document.querySelector('.logos .inst');

//clock
const clock = document.querySelector('.clock');
    setInterval( () => clock.innerText = (new Date()).toLocaleTimeString(), 1000 );
