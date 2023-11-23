	// 오래된 순서 정렬 버튼 기능
	OldButton.onclick = function () {
		if(filter < 2){
			// 요소를 추가할 위치를 찾아서 추가
			let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
			// 해당 공간 html요소 초기화
			SecondBoxDiv.innerHTML = '';

			for(let i=0; i<OldSortBookMarkList.length; i++){

				// 클로저를 사용하여 ElementBookMark 변수를 유지
				let ElementBookMark = SortBookMarkList[i];

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
				BmEditIcon.id = "onBookModify"
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
			
			//////////////////////////정렬에서 삭제 버튼 기능 구현
			// 북마크 삭제 버튼 기능 구현
			let BmDeleteIcon = document.createElement("img");
			BmDeleteIcon.classList.add("BImages");
			BmDeleteIcon.src = "Images/trash.png";
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
			
				console.log('삭제 버튼 클릭>>> ' + AllBookMarkList);
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
			}else{
				resultsList.innerHTML = ''; // 검색 결과를 초기화합니다.
				// 요소를 추가할 위치를 찾아서 추가
				let SecondBoxDiv = document.getElementsByClassName("second-box")[0];
				// 해당 공간 html요소 초기화
				SecondBoxDiv.innerHTML = '';
			
				for (var i = 0; i < OldSortBookMarkList.length; i++) {
				var bookTitle = OldSortBookMarkList[i][0].toLowerCase();
				if (bookTitle.includes(filter)) {

					// 클로저를 사용하여 ElementBookMark 변수를 유지
					let ElementBookMark = SortBookMarkList[i];

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
					BmEditIcon.id = "onBookModify"
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
				
					//////////////////////////정렬에서 삭제 버튼 기능 구현
					// 북마크 삭제 버튼 기능 구현
					let BmDeleteIcon = document.createElement("img");
					BmDeleteIcon.classList.add("BImages");
					BmDeleteIcon.src = "Images/trash.png";
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
					
						console.log('삭제 버튼 클릭>>> ' + AllBookMarkList);
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