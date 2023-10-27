/*모달창 띄우기 테스트 할려고 넣은거라 지워도 상관없음*/

// 모달 열기 버튼과 모달 닫기 버튼 참조
var openModalBtn = document.getElementById('openModalBtn');
var closeModalBtn = document.getElementById('closeModalBtn');

// 모달 참조
var modal = document.getElementById('newModal');

// 모달 열기 이벤트
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// 모달 닫기 이벤트
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// 모달 외부 클릭 시 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

