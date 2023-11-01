const newModal = document.getElementById("newModal"); // 북마크 생성 모달
const saveBtn = document.getElementById("saveBtn"); // 확인 버튼
const cancelBtn = document.getElementById("cancelBtn"); // 취소 버튼
const titleInput = document.getElementById("bookmarkTitle"); // 제목 받아오는 공간
const urlInput = document.getElementById("urlInput"); // URL 받아오는 공간
const tagTextarea = document.getElementById("tagTextarea"); // 태그 받아오는 공간
const allTagArea = document.getElementById("allTaglist"); // 모든 태그 리스트 공간
const currentTagArea = document.getElementById("currentTaglist"); // 최근 태그 리스트 공간

let AllTagList = []; // 전체 태그 배열


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

	console.log("제목:", titleInputValue);
	console.log("URL:", urlInputValue);
	console.log("태그:", tagTextareaValue);

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


	
	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	SecondBoxDiv.appendChild(additionalBoxDiv);


	newModal.style.display = "none";

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}