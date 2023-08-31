// 자동스크롤 JS - auto_scroll.js

/******************************************
    [ 자동스크롤 기능정의 ]
    1. 스크롤바가 없는 상태에서 마우스 휠 작동시
    아래와 같이 기능 구현됨
    (1) 휠 내림: 다음 페이지로 이동
    (1) 휠 올림: 이전 페이지로 이동

    2. 스크롤바 첫페이지와 끝페이지에서 이동 안함
    [ 자동스크롤 이벤트 ]
    -> wheel 이벤트
    -> 마우스 휠 작동시 박생!
    (이전 이벤트명: mousewheel / DOMMouseScroll(파이어폭스))
******************************************/

// 1. 전역변수 설정하기
// 1-1. 페이지변수
let pg_num = 0;
/*  1-2 휠상태변수 */
let sts_wheel=0;
// 2. 이벤트 등록하기 /////////////////
// 대상: window
window.addEventListener('wheel',wheelFn);

// 3. 이벤트 연결함수 /////////////////

/*************************************** 
    함수명: wheelFn
    기능 : 마우스 휠 작동시 페이지이동
***************************************/
function wheelFn(e){ // 이벤트전달변수(자동)
    // 함수호출확인!
    
    // 0. 광휠금지설정 //
    if(sts_wheel) return; // 여기서 나감
    sts_wheel = 1; //잠금
    setTimeout(()=>{sts_wheel=0},800);
    // 0.8초 후 잠금해제

    // 함수호출확인
    console.log('휠작동~~~!');


    // 1. 휠방향에 따른 페이지변수 변경하기
    // 휠방향은 wheelDelta 로 알아냄!
    
    let delta = e.wheelDelta;
    console.log('휠델타:',delta);
    // 음수(-)는 아랫방향, 양수(+)는 윗방향
    
    if(delta<0) pg_num++;
    else pg_num--;

    // 한계수 체크(양끝페이지고정!)
    if(pg_num<0) pg_num=0;
    if(pg_num>6) pg_num=6;
    
    // 전체 페이지번호 확인
    console.log('페이지번호:',pg_num);
    
    
    // 2. 페이지이동하기
    // scrollTo(x축위치,y축위치)
    // 세로방향 이동은 두번째값만 주면된다!
    // 스크롤 애니메이션은 html{scroll-behavior:smooth}로처리
    // 화면단위로 이동하므로 윈도우 높이값을 기본값으로 처리
    // window.innerHeight -> window 높이값 구해온다!
    window.scrollTo(0,window.innerHeight*pg_num);
    
} /////////// wheelFn 함수 ////////////////
///////////////////////////////////////////