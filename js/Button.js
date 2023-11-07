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


let AllTagList = []; // 전체 태그 배열
let UnClassifiedTagList = []; // UnClassified 사이드바 태그 삽입


let AllBookMarkList = []; // 전체 북마크 배열
let SortBookMarkList = []; // 유니코드 순서 정렬된 북마크 배열
let LatestSortBookMarkList = []; // 최신 순서 정렬된 북마크 배열
let OldSortBookMarkList = []; // 오래된 순서 정렬된 북마크 배열


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
	newModal.style.display = "none";

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}


// 확인(저장)버튼
saveBtn.onclick= function() {

	let titleInputValue = document.getElementById("bookmarkTitle").value;
	let urlInputValue= document.getElementById("urlInput").value.trim();
	let tagTextareaValue= document.getElementById("tagTextarea").value.split(' ');

	let ElementBookMark = [titleInputValue, urlInputValue, tagTextareaValue]; // 북마크 요소 저장 배열
	// 전체 북마크 리스트에 요소들 추가 / 북마크 리스트 요소들 정렬된 배열에 추가
	AllBookMarkList.push(ElementBookMark);
	SortBookMarkList.push(ElementBookMark);
	LatestSortBookMarkList.push(ElementBookMark);
	OldSortBookMarkList.unshift(ElementBookMark);
	// console.log("제목:", titleInputValue);
	// console.log("URL:", urlInputValue);
	// console.log("태그:", tagTextareaValue);
	// console.log("북마크 요소들 : " ,ElementBookMark);


	

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
	

	// 북마크 박스 태그 Div 아이콘 추가
	let SImageDiv = document.createElement("div");
	SImageDiv.classList.add("SImages");
	BmAdditionalBoxTagDiv.appendChild(SImageDiv);

	let BmEditIcon = document.createElement("img");
	BmEditIcon.classList.add("BImages");
	BmEditIcon.src = "Images/pencil.png";
	SImageDiv.appendChild(BmEditIcon);

	let BmDeleteIcon = document.createElement("img");
	BmDeleteIcon.classList.add("BImages");
	BmDeleteIcon.src = "Images/trash.png";
	SImageDiv.appendChild(BmDeleteIcon);



	// 전체 태그 목록에 추가
	tagTextareaValue.forEach(v =>{
		AllTagList.push(v.toLowerCase());
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

	// 최근 추가 태그 공간 태그 추가
	for (let i = 0; i < CurrentTagList.length; i++) {

		let CurAdditionalBoxTagDiv = document.createElement("div");
		CurAdditionalBoxTagDiv.classList.add("additional-box-tag");
		currentTagArea.appendChild(CurAdditionalBoxTagDiv);

		let yellowCircleDiv = document.createElement("div");
		yellowCircleDiv.classList.add("yellow-circle");
		CurAdditionalBoxTagDiv.appendChild(yellowCircleDiv);

		let pElement = document.createElement("p");
		pElement.textContent = CurrentTagList[i];
		CurAdditionalBoxTagDiv.appendChild(pElement);
	}
	

	// 사이드바 UnClassified 태그 추가 부분

	// UnClassified html 부분 초기화
	UnClassifiedSidebarArea.innerHTML = '';

	// UnClassifiedTagList 배열 생성후 태그 받아오기
	tagTextareaValue.forEach(v =>{
		UnClassifiedTagList.push(v.toLowerCase());
	});

	// UnClassifiedTagList 배열 중복 제거
	UnClassifiedTagList = [...new Set(UnClassifiedTagList)];
	console.log(UnClassifiedTagList);


	for (let j = 0; j < UnClassifiedTagList.length; j++) {
		let UnclassifiedDiv = document.createElement('div');
		let UnclassifiedSpan = document.createElement('span');

		UnclassifiedSpan.innerText = UnClassifiedTagList[j];

		UnclassifiedSpan.setAttribute('herf', '#');
		UnclassifiedDiv.appendChild(UnclassifiedSpan);
		UnClassifiedSidebarArea.appendChild(UnclassifiedDiv);
	}


	
	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	SecondBoxDiv.appendChild(additionalBoxDiv);


	newModal.style.display = "none";

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}

// 전체 정렬 버튼
AllButton.onclick= function() {
	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	// 해당 공간 html요소 초기화
	SecondBoxDiv.innerHTML = '';

	SortAll(SortBookMarkList); // 북마크 정렬 알고리즘
	for(let i=0; i<SortBookMarkList.length; i++){
		// 북마크 Div요소 생성
		let additionalBoxDiv = document.createElement("div");
		additionalBoxDiv.classList.add("additional-box");

		// 제목 상자
		let h2Element = document.createElement("h2");
		h2Element.textContent = SortBookMarkList[i][0];
		additionalBoxDiv.appendChild(h2Element);

		// URL 상자
		let aElementUrl = document.createElement("a");
		aElementUrl.textContent = SortBookMarkList[i][1];
		aElementUrl.href = SortBookMarkList[i][1];
		aElementUrl.target = "_blank"; // 새창에서 링크 열기
		additionalBoxDiv.appendChild(aElementUrl);

		// 북마크쪽 아래 태그 Div
		let BmAdditionalBoxTagDiv = document.createElement("div");
		BmAdditionalBoxTagDiv.classList.add("additional-box-tag");
		additionalBoxDiv.appendChild(BmAdditionalBoxTagDiv);
		for(let j = 0; j < SortBookMarkList[i][2].length; j++){
			let yellowCircleDiv = document.createElement("div");
				yellowCircleDiv.classList.add("yellow-circle");
				BmAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
			
				let pElement = document.createElement("p");
				pElement.textContent = SortBookMarkList[i][2][j];
				BmAdditionalBoxTagDiv.appendChild(pElement);
			
		}
		// 북마크 박스 태그 Div 아이콘 추가
		let SImageDiv = document.createElement("div");
		SImageDiv.classList.add("SImages");
		BmAdditionalBoxTagDiv.appendChild(SImageDiv);
	
		let BmEditIcon = document.createElement("img");
		BmEditIcon.classList.add("BImages");
		BmEditIcon.src = "Images/pencil.png";
		SImageDiv.appendChild(BmEditIcon);
	
		let BmDeleteIcon = document.createElement("img");
		BmDeleteIcon.classList.add("BImages");
		BmDeleteIcon.src = "Images/trash.png";
		SImageDiv.appendChild(BmDeleteIcon);

		SecondBoxDiv.appendChild(additionalBoxDiv);
		
	}
	console.log("전체 북마크 리스트 : " ,AllBookMarkList);
	console.log("정렬된 북마크 리스트 : " , SortBookMarkList);
	console.log("////////////////")
}

// 최신 순서 정렬 버튼 기능
LatestButton.onclick = function () {
	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	// 해당 공간 html요소 초기화
	SecondBoxDiv.innerHTML = '';

	for(let i=0; i<LatestSortBookMarkList.length; i++){
		// 북마크 Div요소 생성
		let additionalBoxDiv = document.createElement("div");
		additionalBoxDiv.classList.add("additional-box");

		// 제목 상자
		let h2Element = document.createElement("h2");
		h2Element.textContent = LatestSortBookMarkList[i][0];
		additionalBoxDiv.appendChild(h2Element);

		// URL 상자
		let aElementUrl = document.createElement("a");
		aElementUrl.textContent = LatestSortBookMarkList[i][1];
		aElementUrl.href = LatestSortBookMarkList[i][1];
		aElementUrl.target = "_blank"; // 새창에서 링크 열기
		additionalBoxDiv.appendChild(aElementUrl);

		// 북마크쪽 아래 태그 Div
		let BmAdditionalBoxTagDiv = document.createElement("div");
		BmAdditionalBoxTagDiv.classList.add("additional-box-tag");
		additionalBoxDiv.appendChild(BmAdditionalBoxTagDiv);
		for(let j = 0; j < LatestSortBookMarkList[i][2].length; j++){
			let yellowCircleDiv = document.createElement("div");
				yellowCircleDiv.classList.add("yellow-circle");
				BmAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
			
				let pElement = document.createElement("p");
				pElement.textContent = LatestSortBookMarkList[i][2][j];
				BmAdditionalBoxTagDiv.appendChild(pElement);
			
		}
		// 북마크 박스 태그 Div 아이콘 추가
		let SImageDiv = document.createElement("div");
		SImageDiv.classList.add("SImages");
		BmAdditionalBoxTagDiv.appendChild(SImageDiv);
	
		let BmEditIcon = document.createElement("img");
		BmEditIcon.classList.add("BImages");
		BmEditIcon.src = "Images/pencil.png";
		SImageDiv.appendChild(BmEditIcon);
	
		let BmDeleteIcon = document.createElement("img");
		BmDeleteIcon.classList.add("BImages");
		BmDeleteIcon.src = "Images/trash.png";
		SImageDiv.appendChild(BmDeleteIcon);

		SecondBoxDiv.appendChild(additionalBoxDiv);
		
	}
}

// 오래된 버튼 순서
OldButton.onclick = function () {
	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	// 해당 공간 html요소 초기화
	SecondBoxDiv.innerHTML = '';

	for(let i=0; i<OldSortBookMarkList.length; i++){
		// 북마크 Div요소 생성
		let additionalBoxDiv = document.createElement("div");
		additionalBoxDiv.classList.add("additional-box");

		// 제목 상자
		let h2Element = document.createElement("h2");
		h2Element.textContent = OldSortBookMarkList[i][0];
		additionalBoxDiv.appendChild(h2Element);

		// URL 상자
		let aElementUrl = document.createElement("a");
		aElementUrl.textContent = OldSortBookMarkList[i][1];
		aElementUrl.href = OldSortBookMarkList[i][1];
		aElementUrl.target = "_blank"; // 새창에서 링크 열기
		additionalBoxDiv.appendChild(aElementUrl);

		// 북마크쪽 아래 태그 Div
		let BmAdditionalBoxTagDiv = document.createElement("div");
		BmAdditionalBoxTagDiv.classList.add("additional-box-tag");
		additionalBoxDiv.appendChild(BmAdditionalBoxTagDiv);
		for(let j = 0; j < OldSortBookMarkList[i][2].length; j++){
			let yellowCircleDiv = document.createElement("div");
				yellowCircleDiv.classList.add("yellow-circle");
				BmAdditionalBoxTagDiv.appendChild(yellowCircleDiv);
			
				let pElement = document.createElement("p");
				pElement.textContent = OldSortBookMarkList[i][2][j];
				BmAdditionalBoxTagDiv.appendChild(pElement);
			
		}
		// 북마크 박스 태그 Div 아이콘 추가
		let SImageDiv = document.createElement("div");
		SImageDiv.classList.add("SImages");
		BmAdditionalBoxTagDiv.appendChild(SImageDiv);
	
		let BmEditIcon = document.createElement("img");
		BmEditIcon.classList.add("BImages");
		BmEditIcon.src = "Images/pencil.png";
		SImageDiv.appendChild(BmEditIcon);
	
		let BmDeleteIcon = document.createElement("img");
		BmDeleteIcon.classList.add("BImages");
		BmDeleteIcon.src = "Images/trash.png";
		SImageDiv.appendChild(BmDeleteIcon);

		SecondBoxDiv.appendChild(additionalBoxDiv);
		
	}
}