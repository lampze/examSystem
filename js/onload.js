window.onload = function() {
  if(window.localStorage.user) {
    var localUser = JSON.parse(localStorage.user);

    if(localUser.subjectData) {
      user = localUser;
      displaySubject(user.subjectData[user.index]);
      displaySiderLine(user.subjectData);
      
      if(user.time) {
        timeClear = setTime(user.time.s, user.time.m, user.time.h);
      } else {
        timeClear = setTime();
      }
    } else {
      showDom(coverPage, showPage);
    }
  } else {
    showDom(coverPage, showPage);
  }

  subjectTotal.innerText = examData.length;
  
  nowThemeDom = displayTheme(user.theme);
  
  addKeyControl();
};
