const fb = document.querySelector('.logos .fb');
const inst = document.querySelector('.logos .inst');


const link = document.querySelector('a');
        link.img = 'images/FB_logo.png';
        link.href = 'https://sj42.programmingmentor.com';

//clock
const clockElement = document.querySelector('.clock');
    setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

    const infoBlock = document.querySelector('.info-block');
    for (let i = 0; i < 10; i++) {
        let info = document.createElement('p');
        info.innerText = 'Item no: ' + i;
    }


