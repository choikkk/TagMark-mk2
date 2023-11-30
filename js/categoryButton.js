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
  // 배경색 판단 함수
  function isBackgroundColorSameAs(rgbValue) {
    // 현재 body의 배경색을 가져옴
    var currentBackgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');

    // 현재 body 배경색이 주어진 RGB 값과 같은지 확인
    return currentBackgroundColor === rgbValue;
  }

  // 예시: RGB(53, 54, 58)과 비교
  var isSameColor = isBackgroundColorSameAs('rgb(53, 54, 58)');
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
  var categoryImg = document.createElement('img');
  categoryImg.classList.add('category', 'c2dep');
  categoryImg.id = 'openCTModalBtn';

  // 메뉴명에 이미지 추가
  menuSpan.appendChild(categoryImg);

  // 배경색 판단 알고리즘
  if (isSameColor) {
    categoryImg.src = "Images/category dark.png";
  } else{
    categoryImg.src = "Images/category.png";
  }

  // ...이미지 버튼
  categoryImg.onclick = function() {
    // 수정 버튼
    saveChangeCTBtn.addEventListener('click', function () {
      const newValue = changeCTname.value;
      menuSpan.textContent = newValue;

      // 이미지 생성
      const categoryImg = document.createElement('img');
      categoryImg.classList.add('category', 'c2dep');
      categoryImg.src = 'Images/category.png';
      categoryImg.id = 'openCTModalBtn';

      // 메뉴명에 이미지 추가
      menuSpan.appendChild(categoryImg);

      changeCT.style.display = 'none';
      changeCTname.value = "";
    });

    saveDeleteCTBtn.onclick = function(){
      hasDropdownDiv.remove();
      DeleteCT.style.display = 'none';
    }

  }
  
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

  CategoryList.push(addCategoryText.value);

  
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


// 카테고리 이름 수정 취소 버튼
// 취소 버튼
cancelChangeCTBtn.onclick = function() {
  changeCT.style.display = 'none';
  changeCTname.value = "";
}


/////////////////////////////////////////////////////////////////////////////////
// 카테고리 삭제 모달 참조 및 기능 ///// 태그 이동 만든 후 더 추가 예정
const saveDeleteCTBtn = document.getElementById('saveDeleteCTBtn');
const cancelDeleteCTBtn = document.getElementById("cancelDeleteCTBtn");
const DeleteCT = document.getElementById("DeleteCT");


cancelDeleteCTBtn.onclick = function(){
  DeleteCT.style.display = 'none';
}




//////////////////////////////////////////////////////////////////////
// 카테고리 내 태그 이동
const saveChCTBtn = document.getElementById('saveChCTBtn');
const cancelChCTBtn = document.getElementById("cancelChCTBtn"); 
const ChCT = document.getElementById("ChCT"); 
const ChCTText = document.getElementById("ChCTText");








///////////////////////////////////////////////////////////////////////////
// 카테고리 내 태그 삭제
