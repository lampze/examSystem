var subject = getElements("subject");
var subjectNumber = getElements("subject-number");
var answer = getElements("answer");
var headNav = getElements("head-nav");
var navContent = getElements("nav-content");
var changeTheme = getElements("change-theme");
var option = getElements("option");
var randOrNot = getElements("randOrNot");
var subjectTotal = getElements("subject-total");
var subjectRandNum = getElements("subject-rand-num");
var examStart = getElements("exam-start");
var startControl = getElements("start-control");
var arrowAfter = getElements("arrow-after");
var arrowNext = getElements("arrow-next");
var submit = getElements("submit");
var submitView = getElements("submit-view");
var showPage = getElements("show-page");
var coverPage = getElements("cover-page");
var closePage = getElements("close-page");
var tagStart = getElements("tag-start");
var tagSubmitView = getElements("tag-submit-view");
var tagSubmitError = getElements("tag-submit-error");
var submitError = getElements("submit-error");
var passTime = getElements("pass-time");
var siderContent = getElements('sider-content');
var tagTheme = getElements('tag-theme');
var themeControl = getElements('theme-control');
var selectTheme = getElements('select-theme');
var describeTheme = getElements('describe-theme');
var confirmTheme = getElements('confirm-theme');

var user = {};

var timeClear;

var btnSelect = "btn-select";
var btnUnselect = "btn-unselect";

var allTheme = [];
var nowThemeDom;



// // 使用匿名函数来去掉了let，解决了ie无法使用let的问题. --开始--

(function() {
  for(var i = 0; i < option.length; i++) {
    (function(i) {
      option[i].onclick = function() {
        option[i].classList.remove(btnUnselect);
        option[i].classList.add(btnSelect);

        if(user.subjectData) {
          user.subjectData[user.index].userChoice = option[i].innerText;
          saveUser();
        }

        for(var j = 0; j < option.length; j++) {
          if(j != i) {
            option[j].classList.remove(btnSelect);
            option[j].classList.add(btnUnselect);
          }
        }
      };
    })(i);
  }
})();

// // 使用匿名函数来去掉了let，解决了ie无法使用let的问题. --结束--

randOrNot.onclick = function() {
  if(randOrNot.checked) {
    showDom(subjectRandNum);
  } else {
    hideDom(subjectRandNum);
  }
};

arrowNext.onclick = function(e) {
  if(user.index == user.subjectData.length - 1) {
    message("这是最后一题，后面没有了！", e);
    return false;
  } else {
    user.index++;
    displaySubject(user.subjectData[user.index]);
  }
  saveUser();
};

arrowAfter.onclick = function(e) {
  if(user.index == 0) {
    message("这是第一题！！！", e);
    return false;
  } else {
    user.index--;
    displaySubject(user.subjectData[user.index]);
  }
  saveUser();
};

examStart.onclick = function(e) {
  var minSubjectNum = Number(getElements("min-subject-num").value);
  var maxSubjectNum = Number(getElements("max-subject-num").value);
  var randNum = Number(subjectRandNum.value);
  var isRand = randOrNot.checked;
  
  if(minSubjectNum <= 0 || maxSubjectNum <= 0) {
    message("请填一个正数", e);
    return false;
  }
  
  if(!checkIntNum(minSubjectNum) || !checkIntNum(maxSubjectNum)) {
    message("你填入的不是数字", e);
    return false;
  }
  
  if(minSubjectNum > maxSubjectNum) {
    message("数字填反了吧？", e);
    return false;
  }
  
  if(maxSubjectNum > examData.length) {
    message("题库只有"+examData.length+"道题", e);
    return false;
  }
  
  if(randNum > maxSubjectNum - minSubjectNum + 1) {
    message("你选中的只有"+(maxSubjectNum-minSubjectNum+1)+"道题，不能随机出"+randNum+"道题", e);
    return false;
  }

  if(isRand) {
    if(checkIntNum(randNum)) {
      user.subjectData = getRandSubject(examData.slice(minSubjectNum-1, maxSubjectNum), randNum);
    } else {
      message("你填入的不是数字", e);
      return false;
    }
  } else {
    user.subjectData = getSubject(examData, minSubjectNum, maxSubjectNum);
  }
  
  user.index = 0;
  displaySubject(user.subjectData[0]);

  saveUser();

  hideDom(showPage, coverPage, startControl);

  timeClear = setTime();
  
  displaySiderLine(user.subjectData);
};

submit.onclick = function() {
  showDom(showPage, coverPage, tagStart, tagSubmitView, submitView, tagSubmitError, tagTheme);

  hideDom(startControl);

  disposeCompleteSubject(user.subjectData);

  delete window.localStorage.user;

  timeClear();
  
  removeKeyControl();
};

tagStart.onclick = function() {
  hideAllPage();
  showDom(startControl);
}

tagSubmitView.onclick = function() {
  hideAllPage();
  showDom(submitView);
}

tagSubmitError.onclick = function() {
  hideAllPage();
  showDom(submitError);
}

closePage.onclick = function() {
  hideDom(showPage, coverPage);
  
  if(user.time) {
    timeClear = setTime(user.time.s, user.time.m, user.time.h);
    saveUser();
  }
  
  addKeyControl();
};

answer.onclick = displayAnswer;

headNav.onclick = function() {
  if(navContent.classList.contains("hide")) {
    showDom(navContent);
  } else {
    hideDom(navContent);
  }
}

changeTheme.onclick = function() {
  hideAllPage();
  hideDom(tagSubmitView, tagSubmitError, tagStart);
  showDom(themeControl, tagTheme, coverPage, showPage);
}

tagTheme.onclick = function() {
  hideAllPage();
  showDom(themeControl, tagTheme, coverPage, showPage);
}

confirmTheme.onclick = function() {
  var themeName = selectTheme.value;
  user.theme = themeName;
  nowThemeDom = displayTheme(themeName);
  saveUser();
}

selectTheme.onclick = function() {
  var themeName = selectTheme.value;
  var themeObj = {
    default: '班长的最初作品',
    quit: '我不需要任何皮肤！！！'
  };
  describeTheme.innerText = themeObj[themeName];
}

selectTheme.onmouseout = selectTheme.onclick;
