const newModal = document.getElementById("newModal"); // 북마크 생성 모달
const saveBtn = document.getElementById("saveBtn"); // 확인 버튼
const cancelBtn = document.getElementById("cancelBtn"); // 취소 버튼
const titleInput = document.getElementById("bookmarkTitle"); // 제목 받아오는 공간
const urlInput = document.getElementById("urlInput"); // URL 받아오는 공간
const tagTextarea = document.getElementById("tagTextarea"); // 태그 받아오는 공간
const allTagArea = document.getElementById("allTaglist"); // 모든 태그 리스트 공간
const currentTagArea = document.getElementById("currentTaglist"); // 최근 태그 리스트 공간
const AllButton = document.getElementById("allBtn"); // 전체 정렬 버튼
const LatestButton = document.getElementById("latestBtn"); //최신 정렬 버튼
const OldButton = document.getElementById("oldBtn"); //오래된 정렬 버튼
const UnClassifiedSidebarArea = document.getElementById("UnclassifiedUL"); // 사이드바 UnClassified 공간
const DeleteSaveBtn = document.getElementById("DeleteSaveBtn"); // 북마크 삭제 확인 버튼
const DeleteCancelBtn = document.getElementById("DeleteCancelBtn"); // 북마크 삭제 취소 버튼
const modifySaveBtn = document.getElementById("modifySaveBtn"); // 북마크 수정 확인 버튼
const modifyCancelBtn = document.getElementById("modifyCancelBtn"); // 북마크 수정 취소 버튼

const modifiedBookmarkTitle = document.getElementById("modifiedBookmarkTitle"); // 북마크 수정 타이틀 값
const modifiedUrlInput = document.getElementById("modifiedUrlInput"); // 북마크 수정 url 값
const modifiedTagTextarea = document.getElementById("modifiedTagTextarea"); // 북마크 수정 tag 값


var AllRecnetlyTag = []; // 북마크 한개의 최근 추가 태그 리스트 배열
var AllTagList = []; // 전체 태그 배열
var UnClassifiedTagList = []; // UnClassified 사이드바 태그 삽입
var SetTagList = []; // 최근 추가 태그 관련 배열
var AllBookMarkList = []; // 전체 북마크 배열

// 정렬에 필요한 변수
var SortBookMarkList = []; // 유니코드 순서 정렬된 북마크 배열
var LatestSortBookMarkList = []; // 최신 순서 정렬된 북마크 배열
var OldSortBookMarkList = []; // 오래된 순서 정렬된 북마크 배열



// 정렬 함수
function SortAll(arr) {
	arr.sort((a, b) => {
	  const title1 = a[0];
	  const title2 = b[0];
	  return compareTitles(title1, title2);
	});
  }

  // 배열의 첫 번째 요소를 기준으로 비교하는 함수
function compareTitles(title1, title2) {
	const regex = /[!-/:-@\[-`{-~0-9A-Za-z가-힣]/g; // 특수문자, 숫자, 영어, 한글을 검색하는 정규식
  
	function getCharType(char) {
	  if (/[!-/:-@\[-`{-~]/.test(char)) return 0; // 특수문자
	  if (/[0-9]/.test(char)) return 1; // 숫자
	  if (/[A-Za-z]/.test(char)) return 2; // 영어
	  if (/[가-힣]/.test(char)) return 3; // 한글
	  return 4; // 기타 (비교 기준 이외의 문자)
	}
  
	for (let i = 0; i < title1.length && i < title2.length; i++) {
	  const char1 = title1.charAt(i);
	  const char2 = title2.charAt(i);
	  const type1 = getCharType(char1);
	  const type2 = getCharType(char2);
  
	  if (type1 !== type2) {
		return type1 - type2;
	  } else if (char1 !== char2) {
		return char1.localeCompare(char2, 'en', { sensitivity: 'base' });
	  }
	}
  
	return title1.length - title2.length;
  }

// 취소 버튼
cancelBtn.onclick = function() {
	newModal.style.display = "none"; // 북마크 추가 모달 취소버튼

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}

// 확인(저장)버튼
saveBtn.onclick= function() {
	// 배경색 판단 함수
	function isBackgroundColorSameAs(rgbValue) {
		// 현재 body의 배경색을 가져옴
		var currentBackgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
	
		// 현재 body 배경색이 주어진 RGB 값과 같은지 확인
		return currentBackgroundColor === rgbValue;
	}
	
	// 예시: RGB(53, 54, 58)과 비교
	var isSameColor = isBackgroundColorSameAs('rgb(53, 54, 58)');


	let titleInputValue = document.getElementById("bookmarkTitle").value;
	let urlInputValue= document.getElementById("urlInput").value.trim();
	let tagTextareaValue= document.getElementById("tagTextarea").value.split(' ');

	// 프로토콜이 없는 경우 기본적으로 http://를 추가
	if (!urlInputValue.startsWith('http://') && !urlInputValue.startsWith('https://')) {
		urlInputValue = 'http://' + urlInputValue;
	}

	var ElementBookMark = [titleInputValue, urlInputValue, tagTextareaValue]; // 북마크 요소 저장 배열
	// 전체 북마크 리스트에 요소들 추가 / 북마크 리스트 요소들 정렬된 배열에 추가
	AllBookMarkList.push(ElementBookMark);
	SortBookMarkList.push(ElementBookMark);
	LatestSortBookMarkList.push(ElementBookMark);
	OldSortBookMarkList.unshift(ElementBookMark);
	
	AllRecnetlyTag.push(tagTextareaValue);
	var RecnetlyTag = AllRecnetlyTag[AllRecnetlyTag.length-1]

	// 북마크 Div요소 생성
	let additionalBoxDiv = document.createElement("div");
	additionalBoxDiv.classList.add("additional-box");

	// 제목 상자
	let h2Element = document.createElement("h2");
	h2Element.textContent = titleInputValue;
	additionalBoxDiv.appendChild(h2Element);

	// URL 상자
	let aElementUrl = document.createElement("a");
	aElementUrl.textContent = urlInputValue;
	aElementUrl.href = urlInputValue;
	aElementUrl.target = "_blank"; // 새창에서 링크 열기
	additionalBoxDiv.appendChild(aElementUrl);

	// 북마크쪽 아래 태그 Div
	let BmAdditionalBoxTagDiv = document.createElement("div");
	BmAdditionalBoxTagDiv.classList.add("additional-box-tag");
	additionalBoxDiv.appendChild(BmAdditionalBoxTagDiv);
	
	// 북마크 박스에 태그 받고 생성해주는 for문
	for (let i = 0; i < tagTextareaValue.length; i++) {
		let yellowCircleDiv = document.createElement("div");
		yellowCircleDiv.classList.add("yellow-circle");
		BmAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
	  
		let pElement = document.createElement("p");
		pElement.textContent = tagTextareaValue[i];
		BmAdditionalBoxTagDiv.appendChild(pElement);
	}
	
// 북마크 버튼 기능 나눔선 -------------------------------------------
	// 북마크 박스 태그 Div 아이콘 추가
	let SImageDiv = document.createElement("div");
	SImageDiv.classList.add("SImages");
	BmAdditionalBoxTagDiv.appendChild(SImageDiv);

	// 북마크 수정 버튼 기능 구현
	let BmEditIcon = document.createElement("img");
	BmEditIcon.classList.add("BImages");

	// 배경색 판단 알고리즘
	if (isSameColor) {
		BmEditIcon.src = "Images/pencil dark.png";
	  } else{
		BmEditIcon.src = "Images/pencil.png";
	  }
	  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
BmEditIcon.id = "onBookModify"
SImageDiv.appendChild(BmEditIcon);

// 북마크 수정 모달 생성
BmEditIcon.addEventListener('click', function() {
    // 모달 열기
    MDmodal.style.display = "block";

    // 북마크 수정 확인 버튼
    modifySaveBtn.onclick = function() {
		console.log("전체 태그 리스트 >>> " , AllTagList)
        // 모달 입력값에서 수정된 값 가져오기
        let modifiedTitle = document.getElementById("modifiedBookmarkTitle").value;
        let modifiedUrl = document.getElementById("modifiedUrlInput").value.trim();
        let modifiedTags = document.getElementById("modifiedTagTextarea").value.split(' ');

        // 데이터 구조에서 북마크의 인덱스 찾기
        const index = findBookmarkIndex(ElementBookMark);

        if (index !== -1) {
            // 북마크의 값을 수정된 값으로 업데이트
            AllBookMarkList[index][0] = modifiedTitle;
            AllBookMarkList[index][1] = modifiedUrl;
            AllBookMarkList[index][2] = modifiedTags;

            // HTML 엘리먼트를 통해 북마크를 나타내는 요소 업데이트
            let additionalBoxDiv = document.getElementsByClassName("additional-box")[index];
            additionalBoxDiv.querySelector("h2").textContent = modifiedTitle;
            additionalBoxDiv.querySelector("a").textContent = modifiedUrl;
            additionalBoxDiv.querySelector("a").href = modifiedUrl;

            // 태그를 업데이트
            let tagDiv = additionalBoxDiv.querySelector(".additional-box-tag");
            tagDiv.innerHTML = ""; // 기존 태그 초기화

            for (let i = 0; i < modifiedTags.length; i++) {
                let yellowCircleDiv = document.createElement("div");
                yellowCircleDiv.classList.add("yellow-circle");
                tagDiv.appendChild(yellowCircleDiv);

                let pElement = document.createElement("p");
                pElement.textContent = modifiedTags[i];
                tagDiv.appendChild(pElement);
            }

            // 수정 및 삭제 버튼을 추가 (수정된 부분)
            addEditDeleteButtons(additionalBoxDiv, ElementBookMark);
        }

		// 태그 리스트 업데이트
		function updateTagLists(deletedTags) {
			// 삭제된 태그를 모든 태그 목록과 현재 태그 목록에서 찾아 제거
			deletedTags.forEach(deletedTag => {
				const allTagIndex = AllTagList.indexOf(deletedTag.toLowerCase());
				if (allTagIndex !== -1) {
					AllTagList.splice(allTagIndex, 1);
				}
			});

			// 해당 공간 html 요소 초기화
			allTagArea.innerHTML = '';

			// 태그 추가
			for (let i = 0; i < AllTagList.length; i++) {
				let AllAdditionalBoxTagDiv = document.createElement("div");
				AllAdditionalBoxTagDiv.classList.add("additional-box-tag");
				allTagArea.appendChild(AllAdditionalBoxTagDiv);

				let yellowCircleDiv = document.createElement("div");
				yellowCircleDiv.classList.add("yellow-circle");
				AllAdditionalBoxTagDiv.appendChild(yellowCircleDiv);

				let pElement = document.createElement("p");
				pElement.textContent = AllTagList[i];
				AllAdditionalBoxTagDiv.appendChild(pElement);
			}

			// 현재 추가 태그 목록
			let CurrentTagList = SetTagList; // 현재 추가 태그 배열
		}

		// UnClassifiedTagList 업데이트
		function updateUnClassifiedTagList(deletedTags) {
			// 삭제된 태그를 UnClassifiedTagList에서 찾아 제거
			deletedTags.forEach(deletedTag => {
				const unClassifiedIndex = UnClassifiedTagList.indexOf(deletedTag.toLowerCase());
				if (unClassifiedIndex !== -1) {
					UnClassifiedTagList.splice(unClassifiedIndex, 1);
				}
			});

			// UnClassifiedTagList 업데이트
			UnClassifiedSidebarArea.innerHTML = "";
			for (let j = 0; j < UnClassifiedTagList.length; j++) {
				let UnclassifiedDiv = document.createElement('div');
				let UnclassifiedSpan = document.createElement('span');

				UnclassifiedSpan.innerText = UnClassifiedTagList[j];

				UnclassifiedSpan.setAttribute('herf', '#');
				UnclassifiedDiv.appendChild(UnclassifiedSpan);
				UnClassifiedSidebarArea.appendChild(UnclassifiedDiv);
			}
		}

        // 수정 모달 닫기
        MDmodal.style.display = "none";
		modifiedBookmarkTitle.value = ""; // 제목 입력 필드 초기화
		modifiedUrlInput.value = ""; // URL 입력 필드 초기화s
		modifiedTagTextarea.value = ""; // 태그 입력 필드 초기화
    };

    // 북마크 수정 취소 버튼
    modifyCancelBtn.onclick = function() {
        // 모달 닫기
        MDmodal.style.display = "none";
		modifiedBookmarkTitle.value = ""; // 제목 입력 필드 초기화
		modifiedUrlInput.value = ""; // URL 입력 필드 초기화s
		modifiedTagTextarea.value = ""; // 태그 입력 필드 초기화
    };
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 수정 및 삭제 버튼을 추가하는 함수 (새로 추가된 부분)
function addEditDeleteButtons(additionalBoxDiv, bookmark) {
    // 북마크 박스 태그 Div 아이콘 추가
    let SImageDiv = document.createElement("div");
    SImageDiv.classList.add("SImages");
    additionalBoxDiv.querySelector(".additional-box-tag").appendChild(SImageDiv);

    // 북마크 수정 버튼 기능 구현
    let BmEditIcon = document.createElement("img");
    BmEditIcon.classList.add("BImages");
    BmEditIcon.id = "onBookModify";
	// 배경색 판단 알고리즘
	if (isSameColor) {
		BmEditIcon.src = "Images/pencil dark.png";
	  } else{
		BmEditIcon.src = "Images/pencil.png";
	  }

    SImageDiv.appendChild(BmEditIcon);

	// 마우스를 올렸을 때 스타일 변경
	BmEditIcon.addEventListener('mouseover', function() {
		BmEditIcon.style.cursor = 'pointer'; // 마우스 커서를 포인터로 변경
		BmEditIcon.style.opacity = '0.7';   // 원하는 스타일 변경
	});

	// 마우스가 벗어났을 때 스타일 원래대로 변경
	BmEditIcon.addEventListener('mouseout', function() {
		BmEditIcon.style.cursor = 'default'; // 마우스 커서를 기본값으로 변경
		BmEditIcon.style.opacity = '1';      // 원래 스타일로 변경
	});

    // 북마크 수정 모달 생성
    BmEditIcon.addEventListener('click', function() {
        // 모달 열기
        MDmodal.style.display = "block";
        // 북마크 수정 확인 버튼
        modifySaveBtn.onclick = function() {
            // 모달 입력값에서 수정된 값 가져오기
            let modifiedTitle = document.getElementById("modifiedBookmarkTitle").value;
            let modifiedUrl = document.getElementById("modifiedUrlInput").value.trim();
            let modifiedTags = document.getElementById("modifiedTagTextarea").value.split(' ');

            // 데이터 구조에서 북마크의 인덱스 찾기
            const index = findBookmarkIndex(bookmark);

            if (index !== -1) {
                // 북마크의 값을 수정된 값으로 업데이트
                AllBookMarkList[index][0] = modifiedTitle;
                AllBookMarkList[index][1] = modifiedUrl;
                AllBookMarkList[index][2] = modifiedTags;

                // HTML 엘리먼트를 통해 북마크를 나타내는 요소 업데이트
                let additionalBoxDiv = document.getElementsByClassName("additional-box")[index];
                additionalBoxDiv.querySelector("h2").textContent = modifiedTitle;
                additionalBoxDiv.querySelector("a").textContent = modifiedUrl;
                additionalBoxDiv.querySelector("a").href = modifiedUrl;

                // 태그를 업데이트
                let tagDiv = additionalBoxDiv.querySelector(".additional-box-tag");
                tagDiv.innerHTML = ""; // 기존 태그 초기화

                for (let i = 0; i < modifiedTags.length; i++) {
                    let yellowCircleDiv = document.createElement("div");
                    yellowCircleDiv.classList.add("yellow-circle");
                    tagDiv.appendChild(yellowCircleDiv);

                    let pElement = document.createElement("p");
                    pElement.textContent = modifiedTags[i];
                    tagDiv.appendChild(pElement);
                }

				

                // 수정 및 삭제 버튼을 추가 (수정된 부분)
                addEditDeleteButtons(additionalBoxDiv, bookmark);
            }

            // 수정 모달 닫기
            MDmodal.style.display = "none";
			modifiedBookmarkTitle.value = ""; // 제목 입력 필드 초기화
			modifiedUrlInput.value = ""; // URL 입력 필드 초기화
			modifiedTagTextarea.value = ""; // 태그 입력 필드 초기화
			
        };

        // 북마크 수정 취소 버튼
        modifyCancelBtn.onclick = function() {
            // 모달 닫기
            MDmodal.style.display = "none";
			modifiedBookmarkTitle.value = ""; // 제목 입력 필드 초기화
			modifiedUrlInput.value = ""; // URL 입력 필드 초기화
			modifiedTagTextarea.value = ""; // 태그 입력 필드 초기화
        };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    });
    // ... (삭제 버튼과 관련된 로직 추가)
		// 북마크 삭제 버튼 기능 구현
		var BmDeleteIcon = document.createElement("img");
		BmDeleteIcon.classList.add("BImages");
		BmDeleteIcon.id = "onBookDelete";

		// 배경색 판단 알고리즘
		if (isSameColor) {
			BmDeleteIcon.src = "Images/trash dark.png";
		} else{
			BmDeleteIcon.src = "Images/trash.png";
		}
		
		SImageDiv.appendChild(BmDeleteIcon);

		BmDeleteIcon.addEventListener('click', function() {
			//defaultModal.js 삭제 북마크 모달 오픈 
			BDmodal.style.display = "block";
			// 삭제 취소 버튼
			DeleteCancelBtn.onclick = function(){
				BDmodal.style.display = "none";
			}
			// 삭제 확인 버튼
			DeleteSaveBtn.onclick = function() { 
				// 북마크가 AllBookMarkList 배열에서의 인덱스를 찾기
				const index = findBookmarkIndex(ElementBookMark);
			
				// AllBookMarkList 배열에서 북마크 제거
				if (index !== -1) {
					const deletedBookmark = AllBookMarkList.splice(index, 1)[0];
			
					// 태그 목록 업데이트
					updateTagLists(deletedBookmark[2]);
			
					// UnClassifiedTagList 업데이트
					updateUnClassifiedTagList(deletedBookmark[2]);
			
					// 정렬된 배열에서 북마크 제거
					removeFromSortedArrays(deletedBookmark);
				}
			
				// 북마크를 나타내는 HTML 요소를 DOM에서 제거
				additionalBoxDiv.remove();
				BDmodal.style.display = "none"
			}
		});
		
		// 태그 리스트 업데이트
		function updateTagLists(deletedTags) {
			// 삭제된 태그를 모든 태그 목록과 현재 태그 목록에서 찾아 제거
			deletedTags.forEach(deletedTag => {
				const allTagIndex = AllTagList.indexOf(deletedTag.toLowerCase());
				if (allTagIndex !== -1) {
					AllTagList.splice(allTagIndex, 1);
				}
			});
		
			// 해당 공간 html 요소 초기화
			allTagArea.innerHTML = '';
			// currentTagArea.innerHTML = '';
		
			// 태그 추가
			for (let i = 0; i < AllTagList.length; i++) {
				let AllAdditionalBoxTagDiv = document.createElement("div");
				AllAdditionalBoxTagDiv.classList.add("additional-box-tag");
				allTagArea.appendChild(AllAdditionalBoxTagDiv);
		
				let yellowCircleDiv = document.createElement("div");
				yellowCircleDiv.classList.add("yellow-circle");
				AllAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
		
				let pElement = document.createElement("p");
				pElement.textContent = AllTagList[i];
				AllAdditionalBoxTagDiv.appendChild(pElement);
			}
		
			// 현재 추가 태그 목록
			let CurrentTagList = SetTagList; // 현재 추가 태그 배열
		}
		
		// UnClassifiedTagList 업데이트
		function updateUnClassifiedTagList(deletedTags) {
			// 삭제된 태그를 UnClassifiedTagList에서 찾아 제거
			deletedTags.forEach(deletedTag => {
				const unClassifiedIndex = UnClassifiedTagList.indexOf(deletedTag.toLowerCase());
				if (unClassifiedIndex !== -1) {
					UnClassifiedTagList.splice(unClassifiedIndex, 1);
				}
			});
		
			// UnClassifiedTagList 업데이트
			UnClassifiedSidebarArea.innerHTML = "";
			for (let j = 0; j < UnClassifiedTagList.length; j++) {
				let UnclassifiedDiv = document.createElement('div');
				let UnclassifiedSpan = document.createElement('span');
		
				UnclassifiedSpan.innerText = UnClassifiedTagList[j];
		
				UnclassifiedSpan.setAttribute('herf', '#');
				UnclassifiedDiv.appendChild(UnclassifiedSpan);
				UnClassifiedSidebarArea.appendChild(UnclassifiedDiv);
			}
		}
		
		// 전체 북마크 리스트에서 북마크 인덱스 찾기
		function findBookmarkIndex(bookmark) {
			for (let i = 0; i < AllBookMarkList.length; i++) {
				if (
					AllBookMarkList[i][0] === bookmark[0] &&
					AllBookMarkList[i][1] === bookmark[1] &&
					JSON.stringify(AllBookMarkList[i][2]) === JSON.stringify(bookmark[2])
				) {
					return i;
				}
			}
			return -1;
		}
		
		// 정렬된 배열에서 북마크 목록 삭제
		function removeFromSortedArrays(bookmark) {
			SortBookMarkList = SortBookMarkList.filter(bm => bm !== bookmark);
			LatestSortBookMarkList = LatestSortBookMarkList.filter(bm => bm !== bookmark);
			OldSortBookMarkList = OldSortBookMarkList.filter(bm => bm !== bookmark);
		}
	////////////////////////////////////////////////////////////////////////////////////////////
		// 마우스를 올렸을 때 스타일 변경
		BmDeleteIcon.addEventListener('mouseover', function() {
			BmDeleteIcon.style.cursor = 'pointer'; // 마우스 커서를 포인터로 변경
			BmDeleteIcon.style.opacity = '0.7';   // 원하는 스타일 변경
		});

		// 마우스가 벗어났을 때 스타일 원래대로 변경
		BmDeleteIcon.addEventListener('mouseout', function() {
			BmDeleteIcon.style.cursor = 'default'; // 마우스 커서를 기본값으로 변경
			BmDeleteIcon.style.opacity = '1';      // 원래 스타일로 변경
		});
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// 마우스를 올렸을 때 스타일 변경
	BmEditIcon.addEventListener('mouseover', function() {
		BmEditIcon.style.cursor = 'pointer'; // 마우스 커서를 포인터로 변경
		BmEditIcon.style.opacity = '0.7';   // 원하는 스타일 변경
	});

	// 마우스가 벗어났을 때 스타일 원래대로 변경
	BmEditIcon.addEventListener('mouseout', function() {
		BmEditIcon.style.cursor = 'default'; // 마우스 커서를 기본값으로 변경
		BmEditIcon.style.opacity = '1';      // 원래 스타일로 변경
	});

// 북마크 버튼 기능 나눔선 -------------------------------------------

	// 북마크 삭제 버튼 기능 구현
	var BmDeleteIcon = document.createElement("img");
	BmDeleteIcon.classList.add("BImages");
	BmDeleteIcon.id = "onBookDelete";

	// 배경색 판단 알고리즘
	if (isSameColor) {
		BmDeleteIcon.src = "Images/trash dark.png";
	  } else{
		BmDeleteIcon.src = "Images/trash.png";
	  }
	
	SImageDiv.appendChild(BmDeleteIcon);

	BmDeleteIcon.addEventListener('click', function() {
		//defaultModal.js 삭제 북마크 모달 오픈 
		BDmodal.style.display = "block";
		// 삭제 취소 버튼
		DeleteCancelBtn.onclick = function(){
			BDmodal.style.display = "none";
		}
		// 삭제 확인 버튼
		DeleteSaveBtn.onclick = function() { 
			// 북마크가 AllBookMarkList 배열에서의 인덱스를 찾기
			const index = findBookmarkIndex(ElementBookMark);
		
			// AllBookMarkList 배열에서 북마크 제거
			if (index !== -1) {
				const deletedBookmark = AllBookMarkList.splice(index, 1)[0];
		
				// 태그 목록 업데이트
				updateTagLists(deletedBookmark[2]);
		
				// UnClassifiedTagList 업데이트
				updateUnClassifiedTagList(deletedBookmark[2]);
		
				// 정렬된 배열에서 북마크 제거
				removeFromSortedArrays(deletedBookmark);
			}
		
			// 북마크를 나타내는 HTML 요소를 DOM에서 제거
			additionalBoxDiv.remove();
			BDmodal.style.display = "none"
		}
	});
	
	// 태그 리스트 업데이트
	function updateTagLists(deletedTags) {
		// 삭제된 태그를 모든 태그 목록과 현재 태그 목록에서 찾아 제거
		deletedTags.forEach(deletedTag => {
			const allTagIndex = AllTagList.indexOf(deletedTag.toLowerCase());
			if (allTagIndex !== -1) {
				AllTagList.splice(allTagIndex, 1);
			}
		});
	
		// 해당 공간 html 요소 초기화
		allTagArea.innerHTML = '';
		// currentTagArea.innerHTML = '';
	
		// 태그 추가
		for (let i = 0; i < AllTagList.length; i++) {
			let AllAdditionalBoxTagDiv = document.createElement("div");
			AllAdditionalBoxTagDiv.classList.add("additional-box-tag");
			allTagArea.appendChild(AllAdditionalBoxTagDiv);
	
			let yellowCircleDiv = document.createElement("div");
			yellowCircleDiv.classList.add("yellow-circle");
			AllAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
	
			let pElement = document.createElement("p");
			pElement.textContent = AllTagList[i];
			AllAdditionalBoxTagDiv.appendChild(pElement);
		}
	
		// 현재 추가 태그 목록
		let CurrentTagList = SetTagList; // 현재 추가 태그 배열
	}
	
	// UnClassifiedTagList 업데이트
	function updateUnClassifiedTagList(deletedTags) {
		// 삭제된 태그를 UnClassifiedTagList에서 찾아 제거
		deletedTags.forEach(deletedTag => {
			const unClassifiedIndex = UnClassifiedTagList.indexOf(deletedTag.toLowerCase());
			if (unClassifiedIndex !== -1) {
				UnClassifiedTagList.splice(unClassifiedIndex, 1);
			}
		});
	
		// UnClassifiedTagList 업데이트
		UnClassifiedSidebarArea.innerHTML = "";
		for (let j = 0; j < UnClassifiedTagList.length; j++) {
			let UnclassifiedDiv = document.createElement('div');
			let UnclassifiedSpan = document.createElement('span');
	
			UnclassifiedSpan.innerText = UnClassifiedTagList[j];
	
			UnclassifiedSpan.setAttribute('herf', '#');
			UnclassifiedDiv.appendChild(UnclassifiedSpan);
			UnClassifiedSidebarArea.appendChild(UnclassifiedDiv);
		}
	}
	
	// 전체 북마크 리스트에서 북마크 인덱스 찾기
	function findBookmarkIndex(bookmark) {
		for (let i = 0; i < AllBookMarkList.length; i++) {
			if (
				AllBookMarkList[i][0] === bookmark[0] &&
				AllBookMarkList[i][1] === bookmark[1] &&
				JSON.stringify(AllBookMarkList[i][2]) === JSON.stringify(bookmark[2])
			) {
				return i;
			}
		}
		return -1;
	}
	
	// 정렬된 배열에서 북마크 목록 삭제
	function removeFromSortedArrays(bookmark) {
		SortBookMarkList = SortBookMarkList.filter(bm => bm !== bookmark);
		LatestSortBookMarkList = LatestSortBookMarkList.filter(bm => bm !== bookmark);
		OldSortBookMarkList = OldSortBookMarkList.filter(bm => bm !== bookmark);
	}
////////////////////////////////////////////////////////////////////////////////////////////
	// 마우스를 올렸을 때 스타일 변경
	BmDeleteIcon.addEventListener('mouseover', function() {
		BmDeleteIcon.style.cursor = 'pointer'; // 마우스 커서를 포인터로 변경
		BmDeleteIcon.style.opacity = '0.7';   // 원하는 스타일 변경
	});

	// 마우스가 벗어났을 때 스타일 원래대로 변경
	BmDeleteIcon.addEventListener('mouseout', function() {
		BmDeleteIcon.style.cursor = 'default'; // 마우스 커서를 기본값으로 변경
		BmDeleteIcon.style.opacity = '1';      // 원래 스타일로 변경
	});

// 북마크 버튼 기능 나눔선 -------------------------------------------

	// 전체 태그 목록에 추가
	tagTextareaValue.forEach(v =>{
		AllTagList.push(v.toLowerCase());
	});

	tagTextareaValue.forEach(v =>{
		SetTagList.push(v.toLowerCase());
	});

	// AllTagList 배열 중복 제거
	AllTagList = [...new Set(AllTagList)];

	// 해당 공간 html요소 초기화
	allTagArea.innerHTML = '';

	// 태그 추가
	for (let i = 0; i < AllTagList.length; i++) {

		let AllAdditionalBoxTagDiv = document.createElement("div");
		AllAdditionalBoxTagDiv.classList.add("additional-box-tag");
		allTagArea.appendChild(AllAdditionalBoxTagDiv);

		let yellowCircleDiv = document.createElement("div");
		yellowCircleDiv.classList.add("yellow-circle");
		AllAdditionalBoxTagDiv.appendChild(yellowCircleDiv);

		let pElement = document.createElement("p");
		pElement.textContent = AllTagList[i];
		AllAdditionalBoxTagDiv.appendChild(pElement);
	}

	// 최근 추가 태그 목록
	let CurrentTagList = []; // 최근 추가 태그 배열

	tagTextareaValue.forEach(v => {
		CurrentTagList.push(v);
	});
 
	// 해당 공간 html요소 초기화
	currentTagArea.innerHTML = '';

		// 배경색 판단 함수
	function isBackgroundColorSameAs(rgbValue) {
		// 현재 body의 배경색을 가져옴
		var currentBackgroundColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
	
		// 현재 body 배경색이 주어진 RGB 값과 같은지 확인
		return currentBackgroundColor === rgbValue;
	}
	
	// 예시: RGB(53, 54, 58)과 비교
	var isSameColor = isBackgroundColorSameAs('rgb(53, 54, 58)');


	// 최근 추가 태그 공간 태그 추가
	for (let i = 0; i < RecnetlyTag.length; i++) {

		let CurAdditionalBoxTagDiv = document.createElement("div");
		CurAdditionalBoxTagDiv.classList.add("additional-box-tag");
		currentTagArea.appendChild(CurAdditionalBoxTagDiv);

		let yellowCircleDiv = document.createElement("div");
		yellowCircleDiv.classList.add("yellow-circle");
		CurAdditionalBoxTagDiv.appendChild(yellowCircleDiv);

		let pElement = document.createElement("p");
		pElement.textContent = RecnetlyTag[i];
		CurAdditionalBoxTagDiv.appendChild(pElement);
	}
	
	// 사이드바 UnClassified 태그 추가 부분
	// UnClassified html 부분 초기화
	UnClassifiedSidebarArea.innerHTML = "";

	// UnClassifiedTagList 배열 생성후 태그 받아오기
	tagTextareaValue.forEach(v =>{
		UnClassifiedTagList.push(v.toLowerCase());
	});

	// UnClassifiedTagList 배열 중복 제거
	UnClassifiedTagList = [...new Set(UnClassifiedTagList)];

	for (let j = 0; j < UnClassifiedTagList.length; j++) {

		let UnclassifiedDiv = document.createElement('div');
		let UnclassifiedSpan = document.createElement('span');

		UnclassifiedSpan.innerText = UnClassifiedTagList[j];

		UnclassifiedSpan.setAttribute('herf', '#');
		UnclassifiedDiv.appendChild(UnclassifiedSpan);
		UnClassifiedSidebarArea.appendChild(UnclassifiedDiv);

		// 옆에 ... 이미지 추가
		const categoryTagImg = document.createElement('img');
		categoryTagImg.classList.add('category', 'c2dep');
		// categoryTagImg.src = 'Images/category.png';

		categoryTagImg.id = 'openCT2depsModalBtn';
		
		if (isSameColor) {
			categoryTagImg.src = 'Images/category dark.png';
		  } else{
			
			categoryTagImg.src = 'Images/category.png';
		  }

		UnclassifiedSpan.appendChild(categoryTagImg);



		UnclassifiedDiv.onclick = function() {
			SecondBoxDiv.innerHTML = '';
			for(let i = 0; i < AllBookMarkList.length; i++){
				if(AllBookMarkList[i][2].includes(UnclassifiedSpan.innerText)){
					// 클로저를 사용하여 ElementBookMark 변수를 유지
					let ElementBookMark = AllBookMarkList[i];

					// 북마크 Div요소 생성
					let additionalBoxDiv = document.createElement("div");
					additionalBoxDiv.classList.add("additional-box");

					// 제목 상자
					let h2Element = document.createElement("h2");
					h2Element.textContent = AllBookMarkList[i][0];
					additionalBoxDiv.appendChild(h2Element);

					// URL 상자
					let aElementUrl = document.createElement("a");
					aElementUrl.textContent = AllBookMarkList[i][1];
					aElementUrl.href = AllBookMarkList[i][1];
					aElementUrl.target = "_blank"; // 새창에서 링크 열기
					additionalBoxDiv.appendChild(aElementUrl);

					// 북마크쪽 아래 태그 Div
					let BmAdditionalBoxTagDiv = document.createElement("div");
					BmAdditionalBoxTagDiv.classList.add("additional-box-tag");
					additionalBoxDiv.appendChild(BmAdditionalBoxTagDiv);
					for(let j = 0; j < AllBookMarkList[i][2].length; j++){
						let yellowCircleDiv = document.createElement("div");
							yellowCircleDiv.classList.add("yellow-circle");
							BmAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
						
							let pElement = document.createElement("p");
							pElement.textContent = AllBookMarkList[i][2][j];
							BmAdditionalBoxTagDiv.appendChild(pElement);
						
					}

					// 북마크 박스 태그 Div 아이콘 추가
					let SImageDiv = document.createElement("div");
					SImageDiv.classList.add("SImages");
					BmAdditionalBoxTagDiv.appendChild(SImageDiv);
				

					let BmEditIcon = document.createElement("img");
					BmEditIcon.classList.add("BImages");
					
					// 배경색 판단 알고리즘
					if (isSameColor) {
						BmEditIcon.src = "Images/pencil dark.png";
					} else{
						BmEditIcon.src = "Images/pencil.png";
					}

					BmEditIcon.id = "onBookModify"
					SImageDiv.appendChild(BmEditIcon);
					
					// 북마크 수정 모달 생성
					BmEditIcon.addEventListener('click', function() {
						//defaultModal.js 북마크 수정 모달창 오픈
						MDmodal.style.display = "block";

						modifySaveBtn.onclick = function(){
							MDmodal.style.display = "none";
							
						}
						modifyCancelBtn.onclick = function(){
							MDmodal.style.display = "none";
							
						}
					});


					// 마우스를 올렸을 때 스타일 변경
					BmEditIcon.addEventListener('mouseover', function() {
						BmEditIcon.style.cursor = 'pointer'; // 마우스 커서를 포인터로 변경
						BmEditIcon.style.opacity = '0.7';   // 원하는 스타일 변경
					});

					// 마우스가 벗어났을 때 스타일 원래대로 변경
					BmEditIcon.addEventListener('mouseout', function() {
						BmEditIcon.style.cursor = 'default'; // 마우스 커서를 기본값으로 변경
						BmEditIcon.style.opacity = '1';      // 원래 스타일로 변경
					});
				
			//////////////////////////정렬에서 삭제 버튼 기능 구현
			// 북마크 삭제 버튼 기능 구현
					let BmDeleteIcon = document.createElement("img");
					BmDeleteIcon.classList.add("BImages");

					// 배경색 판단 알고리즘
					if (isSameColor) {
						BmDeleteIcon.src = "Images/trash dark.png";
					} else{
						BmDeleteIcon.src = "Images/trash.png";
					}

					BmDeleteIcon.id = "onBookDelete"
					SImageDiv.appendChild(BmDeleteIcon);

					// 마우스를 올렸을 때 스타일 변경
					BmDeleteIcon.addEventListener('mouseover', function() {
						BmDeleteIcon.style.cursor = 'pointer'; // 마우스 커서를 포인터로 변경
						BmDeleteIcon.style.opacity = '0.7';   // 원하는 스타일 변경
					});

					// 마우스가 벗어났을 때 스타일 원래대로 변경
					BmDeleteIcon.addEventListener('mouseout', function() {
						BmDeleteIcon.style.cursor = 'default'; // 마우스 커서를 기본값으로 변경
						BmDeleteIcon.style.opacity = '1';      // 원래 스타일로 변경
					});

					BmDeleteIcon.addEventListener('click', function() {
						//defaultModal.js 삭제 북마크 모달 오픈 
						BDmodal.style.display = "block";
						// 삭제 취소 버튼
						DeleteCancelBtn.onclick = function(){
							BDmodal.style.display = "none";
						}
						// 삭제 확인 버튼
						DeleteSaveBtn.onclick = function() { 
							// 북마크가 AllBookMarkList 배열에서의 인덱스를 찾기
							const index = findBookmarkIndex(ElementBookMark);
						
							// AllBookMarkList 배열에서 북마크 제거
							if (index !== -1) {
								const deletedBookmark = AllBookMarkList.splice(index, 1)[0];
						
								// 태그 목록 업데이트
								updateTagLists(deletedBookmark[2]);
						
								// UnClassifiedTagList 업데이트
								updateUnClassifiedTagList(deletedBookmark[2]);
						
								// 정렬된 배열에서 북마크 제거
								removeFromSortedArrays(deletedBookmark);
							}
						
							// 북마크를 나타내는 HTML 요소를 DOM에서 제거
							additionalBoxDiv.remove();
							BDmodal.style.display = "none"
						}
					});

						// 태그 리스트 업데이트
					function updateTagLists(deletedTags) {
						// 삭제된 태그를 모든 태그 목록과 현재 태그 목록에서 찾아 제거
						deletedTags.forEach(deletedTag => {
							const allTagIndex = AllTagList.indexOf(deletedTag.toLowerCase());
							if (allTagIndex !== -1) {
								AllTagList.splice(allTagIndex, 1);
							}
						});
					
						// 해당 공간 html 요소 초기화
						allTagArea.innerHTML = '';
						// currentTagArea.innerHTML = '';
					
						// 태그 추가
						for (let i = 0; i < AllTagList.length; i++) {
							let AllAdditionalBoxTagDiv = document.createElement("div");
							AllAdditionalBoxTagDiv.classList.add("additional-box-tag");
							allTagArea.appendChild(AllAdditionalBoxTagDiv);
					
							let yellowCircleDiv = document.createElement("div");
							yellowCircleDiv.classList.add("yellow-circle");
							AllAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
					
							let pElement = document.createElement("p");
							pElement.textContent = AllTagList[i];
							AllAdditionalBoxTagDiv.appendChild(pElement);
						}
					
						// 현재 추가 태그 목록
						let CurrentTagList = SetTagList; // 현재 추가 태그 배열
					}
					// UnClassifiedTagList 업데이트
					function updateUnClassifiedTagList(deletedTags) {
						// 삭제된 태그를 UnClassifiedTagList에서 찾아 제거
						deletedTags.forEach(deletedTag => {
							const unClassifiedIndex = UnClassifiedTagList.indexOf(deletedTag.toLowerCase());
							if (unClassifiedIndex !== -1) {
								UnClassifiedTagList.splice(unClassifiedIndex, 1);
							}
						});
					
						// UnClassifiedTagList 업데이트
						UnClassifiedSidebarArea.innerHTML = "";
						for (let j = 0; j < UnClassifiedTagList.length; j++) {
							let UnclassifiedDiv = document.createElement('div');
							let UnclassifiedSpan = document.createElement('span');
					
							UnclassifiedSpan.innerText = UnClassifiedTagList[j];
					
							UnclassifiedSpan.setAttribute('herf', '#');
							UnclassifiedDiv.appendChild(UnclassifiedSpan);
							UnClassifiedSidebarArea.appendChild(UnclassifiedDiv);
						}
					}
					// 전체 북마크 리스트에서 북마크 인덱스 찾기
					function findBookmarkIndex(bookmark) {
						for (let i = 0; i < AllBookMarkList.length; i++) {
							if (
								AllBookMarkList[i][0] === bookmark[0] &&
								AllBookMarkList[i][1] === bookmark[1] &&
								JSON.stringify(AllBookMarkList[i][2]) === JSON.stringify(bookmark[2])
							) {
								return i;
							}
						}
						return -1;
					}
					// 정렬된 배열에서 북마크 목록 삭제
					function removeFromSortedArrays(bookmark) {
						SortBookMarkList = SortBookMarkList.filter(bm => bm !== bookmark);
						LatestSortBookMarkList = LatestSortBookMarkList.filter(bm => bm !== bookmark);
						OldSortBookMarkList = OldSortBookMarkList.filter(bm => bm !== bookmark);
					}
					SecondBoxDiv.appendChild(additionalBoxDiv);
				}
			}
		}
	}

	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	SecondBoxDiv.appendChild(additionalBoxDiv);


	newModal.style.display = "none";

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화s
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}
