const checkAns = (ansN) => {
    if (btn.value == "숫자를 다시 생성합니다"){
        location.reload();
    }

    console.log("입력값: ", num.value);
    console.log("정답: ", ansN);

    if (parseInt(num.value)===ansN){
        console.log("정답입니다");
        img.setAttribute('src','../img/good.png');
        num.style.display = 'none';
        btn.setAttribute('value',"숫자를 다시 생성합니다");
        btn.style.width = '80%';

    } else if(parseInt(num.value)>ansN){
        console.log("down");
        img.setAttribute('src','../img/down.png');
    } else{
        console.log("up");
        img.setAttribute('src','../img/up.png');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn');
    const img = document.querySelector('#img');
    const num = document.querySelector('#num');

    let ansN = Math.floor(Math.random()*100) + 1;
    // num.addEventListener('keydown', (e) => {
    //     e.preventDefault;
    //     if (e.key === 'Enter') {
    //         console.log('엔터키를 눌렀습니다.');
    //         checkAns(ansN);
    //     }
    // });

    btn.addEventListener('click', (e)=>{
        e.preventDefault;
        checkAns(ansN);
    });
});