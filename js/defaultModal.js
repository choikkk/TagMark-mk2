// #북마크 추가#
// 모달 열기 버튼과 모달 닫기 버튼 참조
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// 모달 참조
const modal = document.getElementById('newModal');
const categoryModal = document.getElementById('newCategoryModal');

// 모달 열기 이벤트
openModalBtn.onclick = function() {
  modal.style.display = 'block';
}

// 모달 닫기 이벤트
closeModalBtn.onclick = function() {
  modal.classList.add('closing'); // 새로운 클래스 추가
  setTimeout(function() {
      modal.style.display = 'none';
      modal.classList.remove('closing'); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
  if (event.target == modal) {
      modal.classList.add('closing'); // 새로운 클래스 추가
      setTimeout(function() {
          modal.style.display = 'none';
          modal.classList.remove('closing'); // 새로운 클래스 제거
      }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }
}

// 카테고리 추가 모달
const openCategoryModalBtn = document.getElementById('openCategoryModalBtn');
const closeCategoryModalBtn = document.getElementById('closeCategoryModalBtn');

openCategoryModalBtn.onclick = function() {
  categoryModal.style.display = 'block';
}

closeCategoryModalBtn.onclick = function() {
  categoryModal.classList.add('closing'); // 새로운 클래스 추가
  setTimeout(function() {
    categoryModal.style.display = 'none';
    categoryModal.classList.remove('closing'); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
}



// #카테고리 작은 모달#
var openCTModalBtn = document.getElementById('openCTModalBtn');

// 모달 참조
var myCTModal = document.getElementById('myCTModal');

// 모달 열기 이벤트
openCTModalBtn.onclick = function(e) {
  myCTModal.classList.remove('closing'); // 새로운 클래스 추가
  myCTModal.style.display = 'block';

   // 클릭 이벤트의 마우스 위치
   var mouseX = e.clientX;
   var mouseY = e.clientY;
 
   // 모달 위치 설정
   myCTModal.style.left = mouseX + 'px';
   myCTModal.style.top = mouseY + 'px';
}

// 윈도우 밖 클릭시 반응형 이벤트 추가
window.addEventListener('click', function (event) {
  if (event.target == categoryModal) {
    categoryModal.classList.add('closing'); // 새로운 클래스 추가
    setTimeout(function() {
      categoryModal.style.display = 'none';
      categoryModal.classList.remove('closing'); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }
  else if (event.target == myCTModal) {
    myCTModal.classList.add('closing'); // 새로운 클래스 추가
    setTimeout(function() {
        myCTModal.style.display = 'none';
        myCTModal.classList.remove('closing'); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
}
});