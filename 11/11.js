document.addEventListener('DOMContentLoaded', ()=>{
    const btns1 = document.querySelectorAll('.secBt1');
    const btns2 = document.querySelectorAll('.secBt2');
    const btns3 = document.querySelectorAll('.secBt3');
    const txt = document.querySelector('#txt1');

    for(let btn of btns1){
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            txt.value += btn.innerHTML.replace(' 추가','');
        });
    }

    for(let btn of btns2){
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            // 내방식
            // console.log(btn.innerHTML);
            // let delItem = btn.innerHTML.replace(' 삭제','');
            // for(let i=0; i<txt.value.length; i++){
            //     txt.value = txt.value.replace(delItem,'');
            // }

            //교수님방식
            // let delItem = btn.innerHTML.replace(' 삭제','');
            // let tmArr = Array.from(txt.value);      //이모지 그대로 분리
            // //let tmArr = txt.value.split('');      //유니코드로 분리
            // console.log("tmArr is ", tmArr);
            
            // tmArr = tmArr.filter(item=> item!=delItem);
            // tmArr = tmArr.join('');
            // txt.value = tmArr;

            //찬희님 방식
            let delItem = btn.innerHTML.replace(' 삭제','');
            txt.value = txt.value.replaceAll(delItem,'');

        });
    }

    for(let btn of btns3){
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            
            // replaceAll 활용
            // let delItem = btn.innerHTML.split(' → ')[0];
            // let addItem = btn.innerHTML.split(' → ')[1];
            // console.log("del is" , delItem);
            // console.log("add is" ,addItem);
            // txt.value = txt.value.replaceAll(delItem,addItem);


            //교수님방식 (map활용)
            let items = btn.innerHTML.split(' → ');
            let tmArr = Array.from(txt.value);
            tmArr = tmArr.map(item => item==items[0] ? items[1] : item);
            txt.value = tmArr.join('');
        });
    }
});