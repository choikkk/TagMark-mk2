// #카테고리 작은 모달 마우스 위치#
document.addEventListener('click', function(e){
    if(e.target.id === 'openCT2depsModalBtn'){
      myCT2depsModal.classList.remove("closing"); // 새로운 클래스 추가
      myCT2depsModal.style.display = "block";
    
      // 클릭 이벤트의 마우스 위치
      var mouseX = e.clientX;
      var mouseY = e.clientY;
    
      // 모달 위치 설정
      myCT2depsModal.style.left = mouseX + "px";
      myCT2depsModal.style.top = mouseY + "px";
  
    }
    
  });

// 닫기 애니메이션 추가한거
// } else if (event.target == myCT2depsModal) {
//     myCT2depsModal.classList.add("closing"); // 새로운 클래스 추가
//     setTimeout(function () {
//       myCT2depsModal.style.display = "none";
//       myCT2depsModal.classList.remove("closing"); // 새로운 클래스 제거
//     }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정


// #카테고리 변경 모달
// 모달 열기 버튼과 모달 닫기 버튼 참조
const openCT2depsdModalBtn = document.getElementById("openCT2depsModalBtn"); // 변경된 부분

// 모달 참조
const CTmodal = document.getElementById("myCT2depsModal"); // 변경된 부분

// 모달 열기 이벤트
openCT2depsdModalBtn.onclick = function () {
  // ChangeCTBtn 클릭 시 myCT2depsModal을 닫음
  myCT2depsdModal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    myCT2depsdModal.style.display = "none";
    myCT2depsdModal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정

  // CTmodal 열기
  CTmodal.style.display = "block";
};

