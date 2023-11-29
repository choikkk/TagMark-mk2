const saveCategoryBtn = document.getElementById("saveCategoryBtn"); // 카테고리 추가 확인버튼
const cancelCategoryBtn = document.getElementById("cancelCategoryBtn"); // 카테고리 추가 취소 버튼
const newCategoryModal = document.getElementById("newCategoryModal"); // 카테고리 추가 모달 참조
const addCategoryText = document.getElementById("addCategory"); // 카테고리 명 받아온 텍스트


let CategoryList = []; // 카테고리명 저장 배열


// 취소버튼
cancelCategoryBtn.onclick = function() {
	newCategoryModal.style.display = "none";

    addCategoryText.value = "";
}

///////////////////////////////////////////////////////////////
// 카테고리 추가 함수화
function createSidebarMenu() {
  // 부모 요소 생성
  const hasDropdownDiv = document.createElement('div');
  hasDropdownDiv.classList.add('has-dropdown');

  // 아이콘 생성
  const calendarIcon = document.createElement('i');
  calendarIcon.classList.add('uil-calendar-alt');

  // 메뉴명 생성
  const menuSpan = document.createElement('span');
  menuSpan.setAttribute('href', '#');
  menuSpan.textContent = addCategoryText.value;

  // 이미지 생성
  const categoryImg = document.createElement('img');
  categoryImg.classList.add('category', 'c2dep');
  categoryImg.src = 'Images/category.png';
  categoryImg.id = 'openCTModalBtn';

  // 메뉴명에 이미지 추가
  menuSpan.appendChild(categoryImg);

  // // 하위 메뉴 생성
  // const sidebarDropdown = document.createElement('ul');
  // sidebarDropdown.classList.add('sidebar-dropdown', 'list-unstyled');

  // // 하위 메뉴 아이템 생성
  // const menuItems = [
  //   'Lorem ipsum',
  //   'ipsum dolor',
  //   'dolor ipsum',
  //   'amet consectetur',
  //   'ipsum dolor sit'
  // ];

  // menuItems.forEach(itemText => {
  //   const itemDiv = document.createElement('div');
  //   const itemSpan = document.createElement('span');
  //   itemSpan.setAttribute('href', '#');
  //   itemSpan.textContent = itemText;

  //   const itemImg = document.createElement('img');
  //   itemImg.classList.add('category');
  //   itemImg.src = 'Images/category.png';

  //   itemSpan.appendChild(itemImg);
  //   itemDiv.appendChild(itemSpan);
  //   sidebarDropdown.appendChild(itemDiv);
  // });

  // 부모 요소에 자식 요소들 추가
  hasDropdownDiv.appendChild(calendarIcon);
  hasDropdownDiv.appendChild(menuSpan);
  // hasDropdownDiv.appendChild(sidebarDropdown);

  // 사이드바 시작지점.appendChild
  sidebarStart = document.getElementById("sidebarStart");
  sidebarStart.appendChild(hasDropdownDiv);

  CategoryList.push(addCategoryText.value)

}
  
// 카테고리 추가 확인 버튼
saveCategoryBtn.addEventListener('click', function(){
  createSidebarMenu(); // 함수화 한 함수 호출

  newCategoryModal.style.display = "none"; // 디스플레이 설정 숨김
  addCategoryText.value = ""; // 카테고리 추가 내부 내용 초기화    

});

////////////////////////////////////////////////////////////////////////

// 카테고리 이름 수정 모달 참조 및 기능
const saveChangeCTBtn = document.getElementById('saveChangeCTBtn');
const cancelChangeCTBtn = document.getElementById("cancelChangeCTBtn"); 
const changeCT = document.getElementById("ChangeCT"); 
const changeCTname = document.getElementById("changeCTname"); 

// 카테고리 이름 수정 함수화
function ChangeCTname() {
  const categoryImg = document.getElementById('openCTModalBtn');
  // 클릭된 categoryImg의 부모 노드인 menuSpan을 찾기
  const menuSpan = categoryImg.closest('.has-dropdown').querySelector('span');

  // menuSpan의 값을 변경
  const newValue = changeCTname.value;
  menuSpan.textContent = newValue;

  // 이미지 생성
  const categoryChangeImg = document.createElement('img');
  categoryChangeImg.classList.add('category', 'c2dep');
  categoryChangeImg.src = 'Images/category.png';
  categoryChangeImg.id = 'openCTModalBtn';

  // 메뉴명에 이미지 추가
  menuSpan.appendChild(categoryChangeImg);

}

// 카테고리 이름 수정 확인 버튼
saveChangeCTBtn.addEventListener('click', function () {
  ChangeCTname();

  changeCT.style.display = 'none';
  changeCTname.value = "";
});

// 카테고리 이름 수정 취소 버튼
// 취소 버튼
cancelChangeCTBtn.onclick = function() {
  changeCT.style.display = 'none';
  changeCTname.value = "";
}


/////////////////////////////////////////////////////////////////////////////////
// 카테고리 이름 수정 모달 참조 및 기능 ///// 태그 이동 만든 후 더 추가 예정
const saveDeleteCTBtn = document.getElementById('saveDeleteCTBtn');
const cancelDeleteCTBtn = document.getElementById("cancelDeleteCTBtn");
const DeleteCT = document.getElementById("DeleteCT");

function DelCT() {
  const categoryImg = document.getElementById('openCTModalBtn');

  // 클릭된 categoryImg의 부모 노드인 div 찾기
  const deleteParentDiv = categoryImg.closest('.has-dropdown');
  deleteParentDiv.remove(); // 해당 div 삭제

  // 앞으로 넣어야할 태그 삭제 이동 추가 자리


}


saveDeleteCTBtn.onclick = function(){
  DelCT();
  DeleteCT.style.display = 'none';
}

cancelDeleteCTBtn.onclick = function(){
  DeleteCT.style.display = 'none';
}

  