const newModal = document.getElementById("newModal");
const saveBtn = document.getElementById("saveBtn");
const cancelBtn = document.getElementById("cancelBtn");
const titleInput = document.getElementById("bookmarkTitle");
const urlInput = document.getElementById("urlInput");
const tagTextarea = document.getElementById("tagTextarea");


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

	// HTML 요소 생성
	let additionalBoxDiv = document.createElement("div");
	additionalBoxDiv.classList.add("additional-box");

	let h2Element = document.createElement("h2");
	h2Element.textContent = titleInputValue;
	additionalBoxDiv.appendChild(h2Element);

	let pElement = document.createElement("p");
	pElement.textContent = urlInputValue;
	additionalBoxDiv.appendChild(pElement);

	let additionalBoxTagDiv = document.createElement("div");
	additionalBoxTagDiv.classList.add("additional-box-tag");
	additionalBoxDiv.appendChild(additionalBoxTagDiv);

	let yellowCircleDiv1 = document.createElement("div");
	yellowCircleDiv1.classList.add("yellow-circle");
	additionalBoxTagDiv.appendChild(yellowCircleDiv1);

	let pElement1 = document.createElement("p");
	pElement1.textContent = "HTML   ";
	additionalBoxTagDiv.appendChild(pElement1);

	let yellowCircleDiv2 = document.createElement("div");
	yellowCircleDiv2.classList.add("yellow-circle");
	additionalBoxTagDiv.appendChild(yellowCircleDiv2);

	let pElement2 = document.createElement("p");
	pElement2.textContent = "JS   ";
	additionalBoxTagDiv.appendChild(pElement2);

	let yellowCircleDiv3 = document.createElement("div");
	yellowCircleDiv3.classList.add("yellow-circle");
	additionalBoxTagDiv.appendChild(yellowCircleDiv3);

	let pElement3 = document.createElement("p");
	pElement3.textContent = "CSS   ";
	additionalBoxTagDiv.appendChild(pElement3);

	

	// 요소를 추가할 위치를 찾아서 추가
	let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
	SecondBoxDiv.appendChild(additionalBoxDiv);

	newModal.style.display = "none";

	titleInput.value = ""; // 제목 입력 필드 초기화
	urlInput.value = ""; // URL 입력 필드 초기화
	tagTextarea.value = ""; // 태그 입력 필드 초기화
}