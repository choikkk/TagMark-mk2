var inputSearch = document.getElementById('searchInput');
var resultsList = document.getElementById('searchResults');
var filter = ''; // 초기 검색어 저장 변수

inputSearch.addEventListener('input', function () {
  filter = inputSearch.value.toLowerCase();
});

inputSearch.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    searchBooks();
    inputSearch.blur(); // 검색 실행 후 포커스 해제
  }
});

function searchBooks() {
  if ( filter.length > 0 && filter.length < 2) {
    alert('최소 2글자 이상 입력해주세요.');
    return;
  }else if(filter.length == 0){
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
  }

  resultsList.innerHTML = ''; // 검색 결과를 초기화합니다.
  // 요소를 추가할 위치를 찾아서 추가
  let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
  // 해당 공간 html요소 초기화
  SecondBoxDiv.innerHTML = '';

  for (var i = 0; i < AllBookMarkList.length; i++) {
    var bookTitle = AllBookMarkList[i][0].toLowerCase();
    if (bookTitle.includes(filter)) {
      // var listItem = document.createElement('li');
      // listItem.innerHTML = AllBookMarkList[i][0] + ' by ' + AllBookMarkList[i][1];
      // resultsList.appendChild(listItem);

      
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
      BmEditIcon.src = "Images/pencil.png";
      SImageDiv.appendChild(BmEditIcon);
  
      let BmDeleteIcon = document.createElement("img");
      BmDeleteIcon.classList.add("BImages");
      BmDeleteIcon.src = "Images/trash.png";
      SImageDiv.appendChild(BmDeleteIcon);

      SecondBoxDiv.appendChild(additionalBoxDiv);

    }
  }
}