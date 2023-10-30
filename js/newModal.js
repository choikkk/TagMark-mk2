const newModal = document.getElementById("newModal"); // 북마크 생성 모달
const saveBtn = document.getElementById("saveBtn"); // 확인 버튼
const cancelBtn = document.getElementById("cancelBtn"); // 취소 버튼
const titleInput = document.getElementById("bookmarkTitle"); // 제목
const urlInput = document.getElementById("urlInput"); // URL
const tagTextarea = document.getElementById("tagTextarea"); // 태그 부분
const allTagArea = document.getElementById("allTaglist"); // 모든 태그 리스트

let AllTagList = []; // 전체 태그 배열
let CurrentTagList = []; // 최근 추가 태그 배열


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

	// HTML Div요소 생성
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

	AllTagList = [...new Set(AllTagList)];

	allTagArea.innerHTML = '';

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
	tagTextareaValue.forEach(v => {
		CurrentTagList.push(v);
		if(CurrentTagList.length > 10){
			CurrentTagList.shift();
		}
	});


	
	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	SecondBoxDiv.appendChild(additionalBoxDiv);


	newModal.style.display = "none";

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}