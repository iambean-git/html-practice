//dom 생성된 후 이벤트 감지
document.addEventListener('DOMContentLoaded', ()=>{

    const bt1 = document.getElementById('bt1');
    const bt2 = document.getElementById('bt2');
    const bt3 = document.getElementById('bt3');
    const bt4 = document.getElementById('bt4');
    const bt5 = document.getElementById('bt5');
    const bt6 = document.getElementById('bt6');

    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    bt3.addEventListener('click', ()=>{
        let n = Math.floor(Math.random()*6) + 1;
        console.log("n is" ,n)
        img1.setAttribute('src', `../img/${n}.png`);
        img2.setAttribute('src', `../img/3.png`);
    });

    

}); 