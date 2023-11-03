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
});