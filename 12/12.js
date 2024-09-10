//OPEN API 데이터 가져오기
const getData = (selDt, ul) =>{
    console.log(selDt);
    const testAPI = '82ca741a2844c5c180a208137bb92bd7';
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
    url = `${url}key=${testAPI}&targetDt=${selDt}`;
    console.log(url);   //URL 확인

    fetch(url)
        .then( resp => resp.json())
        .then( data=> {
            console.log(data.boxOfficeResult.dailyBoxOfficeList);
            let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

            let tm = dailyBoxOfficeList.map(item => 
                `<li class="mvli">
                    <span class = "rank"> ${item.rank} </span>
                    <span class ="movieNM"> ${item.movieNm} </span>
                </li>`);
            ul.innerHTML = tm.join('');
            ul.style.border = '1px dotted rgb(177, 177, 177)';
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
    //어제날짜구하기
    let yesterday = getYesterday();
    console.log('yesterday : ', yesterday );

    //date요소 최댓값 설정
    dt.max = yesterday;

    dt.addEventListener('change', ()=>{
        getData(dt.value.replaceAll('-',''), ul);
    });
    
});