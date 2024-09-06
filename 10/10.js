document.addEventListener('DOMContentLoaded', () => {
    const divNum = document. querySelectorAll(".div1");
    const divplus = document. querySelector(".divplus");
    
    const btn = document.querySelector('#makeNum');
    const spanNum = document.querySelectorAll('#divNum>span');
    const spanBonus= document.querySelector('#divBonus>span');
    
    divNum[0].style.display = "none";
    divNum[1].style.display = "none";
    divplus.style.display = "none";

    let arr = [];
    let numBonus;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        arr = [];
        for (let i = 0; i < 7; i++) {
            let temp = Math.floor(Math.random() * 45) + 1;
            if (!arr.includes(temp)) arr.push(temp);
            else i -= 1;
        }
        numBonus = arr[arr.length - 1];

        arr.pop();
        arr.sort((a, b) => a - b);

        for (let i = 0; i < spanNum.length; i++) {
            spanNum[i].innerHTML = arr[i];
            spanNum[i].setAttribute('class',`sp${parseInt(arr[i]/10)}`);
        }
        spanBonus.innerHTML = numBonus;
        spanBonus.setAttribute('class',`sp${parseInt(numBonus/10)}`);

        divNum[0].style.display = "flex";
        divNum[1].style.display = "flex";
        divplus.style.display = "flex";
    });

});