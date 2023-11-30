// #css 경로 변경
let isChanged = false;  // CSS 파일 이름 변경 상태를 추적하는 변수

document.getElementById('chdarkmode').addEventListener('click', function() {
  let linkElements = document.getElementsByTagName('link');
  for (let i = 0; i < linkElements.length; i++) {
    let href = linkElements[i].getAttribute('href');
    if (!isChanged) {  // CSS 파일 이름이 변경되지 않은 경우
      if (href.includes('css/style.css')) {
        linkElements[i].setAttribute('href', 'css/DarkmodeStyle.css');
      } else if (href.includes('css/modal.css')) {
        linkElements[i].setAttribute('href', 'css/DarkModal.css');
      } else if (href.includes('css/sidebar.css')) {
        linkElements[i].setAttribute('href', 'css/DarkSidebar.css');
      }
    } else {  // CSS 파일 이름이 변경된 경우
      if (href.includes('css/DarkmodeStyle.css')) {
        linkElements[i].setAttribute('href', 'css/style.css');
      } else if (href.includes('css/DarkModal.css')) {
        linkElements[i].setAttribute('href', 'css/modal.css');
      } else if (href.includes('css/DarkSidebar.css')) {
        linkElements[i].setAttribute('href', 'css/sidebar.css');
      }
    }
  }
  isChanged = !isChanged;  // CSS 파일 이름 변경 상태를 반전

  //다크모드 전환시 애니메이면
   // 추가된 부분: 애니메이션 클래스 추가
   document.body.classList.add('theme-transition');
   // 애니메이션 끝나면 클래스 제거
   document.body.addEventListener('animationend', function() {
     document.body.classList.remove('theme-transition');
   });

});


// #다크모드 이미지 변경
document.getElementById('chdarkmode').addEventListener('click', function() {
  let addBookmarkImages = document.querySelectorAll('.addbookmarkIm');
  let addCaImages = document.querySelectorAll('.addCaIm');
  let categoryImages = document.querySelectorAll('#openCTModalBtn');
  let category2depsImages = document.querySelectorAll('#openCT2depsModalBtnIM');
  let pencilImages = document.querySelectorAll('#onBookModify');
  let trashImages = document.querySelectorAll('#onBookDelete');
  let CTpencilImages = document.querySelectorAll('.pencilIm');
  let CTtrashImages = document.querySelectorAll('.trashIm');
  let lightModeImages = document.querySelectorAll('.darkmodeIm');


  // add bookmark 현재 클래스 상태를 확인하여 이미지 변경
  addBookmarkImages.forEach(function(image) {
      if (document.body.classList.contains('dark-mode')) {
          // 현재 다크 모드일 때
          if (image.src.includes('add bookmark dark.png')) {
              // 이미지가 add bookmark dark.png일 경우에만 변경
              image.src = 'Images/add bookmark.png';
          } else {
              // 이미지가 add bookmark.png일 경우에는 add bookmark dark.png로 변경
              image.src = 'Images/add bookmark dark.png';
          }
      } else {
          // 현재 라이트 모드일 때
          if (image.src.includes('add bookmark.png')) {
              // 이미지가 add bookmark.png일 경우에만 변경
              image.src = 'Images/add bookmark dark.png';
          } else {
              // 이미지가 add bookmark dark.png일 경우에는 add bookmark.png로 변경
              image.src = 'Images/add bookmark.png';
          }
      }
  });

  // addCa 이미지
  addCaImages.forEach(function(image) {
      if (document.body.classList.contains('dark-mode')) {
          if (image.src.includes('addCa dark.png')) {
              image.src = 'Images/addCa.png';
          } else {
              image.src = 'Images/addCa dark.png';
          }
      } else {
          if (image.src.includes('addCa.png')) {
              image.src = 'Images/addCa dark.png';
          } else {
              image.src = 'Images/addCa.png';
          }
      }
  });

  // category 이미지
  categoryImages.forEach(function(image) {
      if (document.body.classList.contains('dark-mode')) {
          if (image.src.includes('category dark.png')) {
              image.src = 'Images/category.png';
          } else {
              image.src = 'Images/category dark.png';
          }
      } else {
          if (image.src.includes('category.png')) {
              image.src = 'Images/category dark.png';
          } else {
              image.src = 'Images/category.png';
          }
      }
  });

   // category 2deps 이미지
   category2depsImages.forEach(function(image) {
    if (document.body.classList.contains('dark-mode')) {
        if (image.src.includes('category dark.png')) {
            image.src = 'Images/category.png';
        } else {
            image.src = 'Images/category dark.png';
        }
    } else {
        if (image.src.includes('category.png')) {
            image.src = 'Images/category dark.png';
        } else {
            image.src = 'Images/category.png';
        }
    }
});

  // pencil 이미지
  pencilImages.forEach(function(image) {
      if (document.body.classList.contains('dark-mode')) {
          if (image.src.includes('pencil dark.png')) {
              image.src = 'Images/pencil.png';
          } else {
              image.src = 'Images/pencil dark.png';
          }
      } else {
          if (image.src.includes('pencil.png')) {
              image.src = 'Images/pencil dark.png';
          } else {
              image.src = 'Images/pencil.png';
          }
      }
  });

  // trash 이미지
  trashImages.forEach(function(image) {
      if (document.body.classList.contains('dark-mode')) {
          if (image.src.includes('trash dark.png')) {
              image.src = 'Images/trash.png';
          } else {
              image.src = 'Images/trash dark.png';
          }
      } else {
          if (image.src.includes('trash.png')) {
              image.src = 'Images/trash dark.png';
          } else {
              image.src = 'Images/trash.png';
          }
      }
  });

  // CTpencil 이미지 
  CTpencilImages.forEach(function(image) {
    if (document.body.classList.contains('dark-mode')) {
        if (image.src.includes('pencil dark.png')) {
            image.src = 'Images/pencil.png';
        } else {
            image.src = 'Images/pencil dark.png';
        }
    } else {
        if (image.src.includes('pencil.png')) {
            image.src = 'Images/pencil dark.png';
        } else {
            image.src = 'Images/pencil.png';
        }
    }
});

// CTtrash 이미지 
CTtrashImages.forEach(function(image) {
  if (document.body.classList.contains('dark-mode')) {
      if (image.src.includes('trash dark.png')) {
          image.src = 'Images/trash.png';
      } else {
          image.src = 'Images/trash dark.png';
      }
  } else {
      if (image.src.includes('trash.png')) {
          image.src = 'Images/trash dark.png';
      } else {
          image.src = 'Images/trash.png';
      }
  }
});

  // darkmode 이미지
  lightModeImages.forEach(function(image) {
      if (document.body.classList.contains('dark-mode')) {
          if (image.src.includes('lightmode.png')) {
              image.src = 'Images/darkmode.png';
          } else {
              image.src = 'Images/lightmode.png';
          }
      } else {
          if (image.src.includes('darkmode.png')) {
              image.src = 'Images/lightmode.png';
          } else {
              image.src = 'Images/darkmode.png';
          }
      }
  });

});






