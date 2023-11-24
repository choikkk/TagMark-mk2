const saveCategoryBtn = document.getElementById("saveCategoryBtn"); // 카테고리 추가 확인버튼
const cancelCategoryBtn = document.getElementById("cancelCategoryBtn"); // 카테고리 추가 취소 버튼
const newCategoryModal = document.getElementById("newCategoryModal"); // 카테고리 추가 모달 참조
const addCategoryText = document.getElementById("addCategory"); // 카테고리 명 받아온 텍스트

// 취소버튼
cancelCategoryBtn.onclick = function() {
	newCategoryModal.style.display = "none";

    addCategoryText.value = "";
}

///////////////////////////////////////////////////////////////
// 함수화
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


    // 카테고리 작은 모달 추가 함수화
    var myCTModal = document.getElementById("myCTModal");
    var openCTModalBtn = document.getElementById("openCTModalBtn");

    openCTModalBtn.onclick = function (e) {
        myCTModal.classList.remove("closing"); // 새로운 클래스 추가
        myCTModal.style.display = "block";
      
        // 클릭 이벤트의 마우스 위치
        var mouseX = e.clientX;
        var mouseY = e.clientY;
      
        // 모달 위치 설정
        myCTModal.style.left = mouseX + "px";
        myCTModal.style.top = mouseY + "px";
      };
  }
  
  ////////////////////////////////////////////////////////////////////

  // 함수 호출
  // createSidebarMenu();
  saveCategoryBtn.addEventListener('click', function(){
    createSidebarMenu();
    newCategoryModal.style.display = "none";
    addCategoryText.value = "";
    
  });
  