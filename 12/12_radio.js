//OPEN API 데이터 가져오기
const getData = (selDt, ul,radioBtn) =>{
    console.log(selDt);

    //라디오 버튼 체크 확인
    let radioCheck;
    for(let i=0; i<radioBtn.length; i++){
        if (radioBtn[i].checked)    radioCheck=radioBtn[i].value;
    }

    //url 생성
    const testAPI = '82ca741a2844c5c180a208137bb92bd7';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${testAPI}&targetDt=${selDt}`;

    if(radioCheck!="default"){
        url += `&repNationCd=${radioCheck}`;
    }

    console.log(url);   //URL 확인

    fetch(url)
        .then( resp => resp.json())
        .then( data=> {
            //console.log(data.boxOfficeResult.dailyBoxOfficeList);
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

            let tm = dailyBoxOfficeList.map(item => 
                `<li class="mvli">
                    <span class = "rank"> ${item.rank} </span>
                    <span class = "movieNM"> ${item.movieNm} </span>
                    <span class= "openDt">(${item.openDt})  </span>
                    <span class= "rankInten">
                    ${item.rankInten > 0 ? '<span class="spRed">▲</span>' : (item.rankInten==0 ? '-':'<span class="spBlue">▼</span>')} 
                    &nbsp;${item.rankInten != 0 ? Math.abs(item.rankInten) : ''} </span>
                </li>`);
            ul.innerHTML = tm.join('');
            ul.style.border = '1px dotted rgb(177, 177, 177)';

            //색상바꾸기 (은빈방식)
            // const spanRankInten = document.querySelectorAll('.rankInten');
            // for(let item of spanRankInten){
            //     if(item.innerHTML.split('')[0]=='▲')     item.style.color = "#b22222";
            //     else if(item.innerHTML.split('')[0]=='▼') item.style.color = "mediumblue";
            // }
        })
        .catch( err => console.error(err));
}

//어제 날짜 구하기 함수
const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() -1);
    //console.log('yesterday : ', yesterday );

    let dateString = '';
    dateString = dateString + yesterday.getFullYear() +"-"
                +(("0" +(yesterday.getMonth()+1))).slice(-2) + "-"
                +("0" +yesterday.getDate()).slice(-2)
    //console.log("hello", dateString);
    return dateString;
}

document.addEventListener('DOMContentLoaded', ()=>{
    //요소가져오기
    const dt = document.querySelector('#dt');
    const ul = document.querySelector('.sec>ul');
    const radioBtn = document.getElementsByName('nation');
  
    //어제날짜구하기
    let yesterday = getYesterday();
    console.log('yesterday : ', yesterday );

    //어제 날짜 defalult
    dt.value = yesterday;

    //기본 첫 페이지 (어제 날짜로)
    getData(dt.value.replaceAll('-',''), ul,radioBtn);

    //date요소 최댓값 설정
    dt.max = yesterday;
    
    //달력 날짜 선택시 
    dt.addEventListener('change', ()=>{
        getData(dt.value.replaceAll('-',''), ul,radioBtn);
    });

    radioBtn.forEach((radio)=>{
        radio.addEventListener('change', ()=>{
            getData(dt.value.replaceAll('-',''), ul,radioBtn);
        });
    });

});