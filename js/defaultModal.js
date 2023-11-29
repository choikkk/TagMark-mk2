

//카테고리 작은 모달 다크모드
document.getElementById('chdarkmode').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// #북마크 추가#
// 모달 열기 버튼과 모달 닫기 버튼 참조
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// 모달 참조
const modal = document.getElementById("newModal");
const categoryModal = document.getElementById("newCategoryModal");
const SBdeleteTagModal = document.getElementById('SBdeleteTagModal');

// 모달 열기 이벤트
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// 모달 닫기 이벤트
closeModalBtn.onclick = function () {
  modal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    modal.style.display = "none";
    modal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
};

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      modal.style.display = "none";
      modal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }
};

// #카테고리 추가 모달
const openCategoryModalBtn = document.getElementById("openCategoryModalBtn");
const closeCategoryModalBtn = document.getElementById("closeCategoryModalBtn");

openCategoryModalBtn.onclick = function () {
  categoryModal.style.display = "block";
};

closeCategoryModalBtn.onclick = function () {
  categoryModal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    categoryModal.style.display = "none";
    categoryModal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
};

// #카테고리 작은 모달 마우스 위치#
document.addEventListener('click', function(e){
  if(e.target.id === 'openCTModalBtn'){
    myCTModal.classList.remove("closing"); // 새로운 클래스 추가
    myCTModal.style.display = "block";
  
    // 클릭 이벤트의 마우스 위치
    var mouseX = e.clientX;
    var mouseY = e.clientY;
  
    // 모달 위치 설정
    myCTModal.style.left = mouseX + "px";
    myCTModal.style.top = mouseY + "px";

  }
  
});



// #카테고리 변경 모달
// 모달 열기 버튼과 모달 닫기 버튼 참조
const openCCModalBtn = document.getElementById("ChangeCTBtn"); // 변경된 부분
const closeCCModalBtn = document.getElementById("closeCCModalBtn");

// 모달 참조
const CCmodal = document.getElementById("ChangeCT"); // 변경된 부분

// 모달 열기 이벤트
openCCModalBtn.onclick = function () {
  // ChangeCTBtn 클릭 시 myCTModal을 닫음
  myCTModal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    myCTModal.style.display = "none";
    myCTModal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정

  // CCmodal 열기
  CCmodal.style.display = "block";
};

// 모달 닫기 이벤트
closeCCModalBtn.onclick = function () {
  CCmodal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    CCmodal.style.display = "none";
    CCmodal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
};

// #카테고리 삭제 모달
// 모달 열기 버튼과 모달 닫기 버튼 참조
const openDCModalBtn = document.getElementById("DeleteCTBtn"); // 변경된 부분
const closeDCModalBtn = document.getElementById("closeDCModalBtn");

// 모달 참조
const DCmodal = document.getElementById("DeleteCT"); // 변경된 부분

// 모달 열기 이벤트
openDCModalBtn.onclick = function () {
  // DeleteCTBtn 클릭 시 myCTModal을 닫음
  myCTModal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    myCTModal.style.display = "none";
    myCTModal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정

  DCmodal.style.display = "block";
};

// 모달 닫기 이벤트
closeDCModalBtn.onclick = function () {
  DCmodal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    DCmodal.style.display = "none";
    DCmodal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
};


// #북마크 수정#
// 모달 열기 버튼과 모달 닫기 버튼 참조
const closeMDModalBtn = document.getElementById("closeMDModalBtn");

// 모달 참조
const MDmodal = document.getElementById("ModiModal");
// SaveButton.js에서 모달 오픈

// 모달 닫기 이벤트
closeMDModalBtn.onclick = function () {
  MDmodal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    MDmodal.style.display = "none";
    MDmodal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
};

// #북마크 삭제#
// 모달 열기 버튼과 모달 닫기 버튼 참조
const closeBDModalBtn = document.getElementById("closeBDModalBtn");

// 모달 참조
const BDmodal = document.getElementById("BDModal");
// SaveButton.js에서 모달 오픈

// 모달 닫기 이벤트
closeBDModalBtn.onclick = function () {
  BDmodal.classList.add("closing"); // 새로운 클래스 추가
  setTimeout(function () {
    BDmodal.style.display = "none";
    BDmodal.classList.remove("closing"); // 새로운 클래스 제거
  }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
};

// #윈도우 밖 클릭시 반응형 이벤트 추가
window.addEventListener("click", function (event) {
  if (event.target == categoryModal) {
    categoryModal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      categoryModal.style.display = "none";
      categoryModal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  } else if (event.target == myCTModal) {
    myCTModal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      myCTModal.style.display = "none";
      myCTModal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  } else if (event.target == myCT2depsModal) {
    myCT2depsModal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      myCT2depsModal.style.display = "none";
      myCT2depsModal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }
   else if (event.target == CCmodal) {
    CCmodal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      CCmodal.style.display = "none";
      CCmodal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  } else if (event.target == DCmodal) {
    DCmodal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      DCmodal.style.display = "none";
      DCmodal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }else if (event.target == MDmodal) {
    MDmodal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      MDmodal.style.display = "none";
      MDmodal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }else if (event.target == BDmodal) {
    BDmodal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      BDmodal.style.display = "none";
      BDmodal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }else if(event.target == SBdeleteTagModal){
    SBdeleteTagModal.classList.add("closing"); // 새로운 클래스 추가
    setTimeout(function () {
      SBdeleteTagModal.style.display = "none";
      SBdeleteTagModal.classList.remove("closing"); // 새로운 클래스 제거
    }, 500); // 애니메이션 지속 시간과 동일한 시간을 설정
  }
  
  
});
