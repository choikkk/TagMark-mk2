// 모달 열기 버튼과 모달 닫기 버튼 참조
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

// 모달 참조
var modal = document.getElementById('newModal');

// 모달 열기 이벤트
openModalBtn.onclick = function() {
  modal.classList.remove('closing'); // 새로운 클래스 추가
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

/*카테고리 작은 모달 수정할거
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('myModal');
const closeModalBtn = document.querySelector('.close');

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

*/