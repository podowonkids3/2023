//노래 시작 시간
let sound = document.querySelector("audio");
sound.currentTime = 5;

//youtube API 불러오는 부분
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//플레이어 변수 설정
var player;
var myaudio = document.getElementById("myaudio");
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "PWxGSNSQhOE",
    events: {
      onReady: onPlayerReady, //로딩중에 이벤트 실행한다
      onStateChange: onPlayerStateChange, //플레이어 상태 변화 시 이벤트를 실행한다.
    },
  });
}

function onPlayerReady(event) {
  //event.target.playVideo();//자동재생
}

var done = false;
function onPlayerStateChange(event) {
  // const myaudio = document.getElementById('myaudio');
  myaudio.pause();
  console.log("잠시멈춤 성공");
  if (event.data == YT.PlayerState.PLAYING && !done) {
    done = true;
  } else if (event.data === 0) {
    myaudio.play();
  }
}

function instaOn(event) {
  myaudio.pause();
  console.log("instaON");
}


function c1() {
  goToSlide(currentIdx - 1);
}

function c2() {
  goToSlide(currentIdx + 1);
}

function goToSlide(currentIdx) {
  updateNav(currentIdx);
}

goToSlide(0);

// function updateNav(currentIdx) {
//   btnPrev.classList.add("disabled");
  // if(slides[0] || currentIdx == 0){
  //     btnPrev.classList.add('disabled');
  // }else{
  //     btnPrev.classList.remove('disabled');
  // }
  // if(currentIdx ==0 ){
  //     btnPrev.classList.add('disabled');
  //     console.log(currentIdx);
  // }else {
  //     btnPrev.classList.remove('disabled');
  // }

  // if(currentIdx == slideCount-1 ){
  //     btnNext.classList.add('disabled');
  // }else {
  //     btnNext.classList.remove('disabled');
  //     console.log(currentIdx);
  // }
}
