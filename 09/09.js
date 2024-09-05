document.addEventListener('DOMContentLoaded', () => {
    const txt1 = document.querySelector('#txt1');
    const txt2 = document.querySelector('#txt2');
    const btn1 = document.querySelector('#bt1');
    const btn2 = document.querySelector('#bt2');



    //회문확인


    //숫자합계
    btn2.addEventListener('click', (e)=>{
        e.preventDefault;
        

        for(let c of txt1.value){
            console.log(isNaN(c));
        }
    });

    // for(let c of s){
    //     console.log(isNaN(c));         //of는 값을 가짐 (글자 그 자체)
        
    // }
});