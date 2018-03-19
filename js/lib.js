function getElements(dom) {
  var ele = document.getElementsByClassName(dom);
  if(ele.length === 1) {
    return ele[0];
  } else {
    return ele;
  }
}

function checkIntNum(data) {
  if(!/^\d+$/.test(data))
    return false;
  else
    return true;
}

function displaySubject(dataObj) {
  var str = dataObj.head + "\n\n";
  for(var i = 0; i < dataObj.body.length; i++) {
    str += String.fromCharCode('A'.charCodeAt() + i) + '：' + dataObj.body[i] + "\n";
  }
  subject.innerText = str;
  selectTrueOption(dataObj);
  subjectNumber.innerText = user.index + 1 || 1;

  if(dataObj.body.length < 4) {
    for(var i = dataObj.body.length; i < 4; i++) {
      visibilityDom(option[i]);
    }
  } else {
    for(var i = 0; i < 4; i++) {
      showDom(option[i]);
    }
  }
}

function cloneObj (obj) {
  var newObj = {};
  if (obj instanceof Array) {
    newObj = [];
  }
  for (var key in obj) {
    var val = obj[key];
    newObj[key] = typeof val === 'object' ? cloneObj(val) : val;
  }
  return newObj;
};

function random(min, max) {
  return parseInt(Math.random()*(max-min+1)+min,10);
}

function getRandSubject(data, time) {
  var randData = [];
  var allRandNum = [];
  if(time > data.length) {
    return false;
  }
  for(var i = 0; i < time; i++) {
    var isRepeat = true;
    while(isRepeat) {
      var randNum = random(0, data.length - 1);
      isRepeat = false;
      for(var j = 0; j < allRandNum.length; j++) {
        if(randNum == allRandNum[j]) {
          isRepeat = true;
        }
      }
    }
    allRandNum.push(randNum);
    var obj = cloneObj(data[randNum]);
    obj.number = randNum;
    randData.push(obj);
  }
  return randData;
}

function getSubject(data, min, max) {
  var subjectData = [];
  subjectData = cloneObj(data.slice(min-1, max));
  for(var i = 0; i < subjectData.length; i++) {
    subjectData[i].number = min - 1 + i;
  }
  return subjectData;
}

function selectTrueOption(dataObj) {
  for(var i = 0; i < option.length; i++) {
    if(dataObj.userChoice === option[i].innerText) {
      option[i].classList.remove(btnUnselect);
      option[i].classList.add(btnSelect);
    } else {
      option[i].classList.remove(btnSelect);
      option[i].classList.add(btnUnselect);
    }
  }
}

function saveUser() {
  if(window.localStorage) {
    var storage = window.localStorage;
    window.localStorage.user = JSON.stringify(user);
  }
}

function getViewSubject(data) {
  var subjectText = '';
  subjectText += "总题库中第" + (data.number + 1) + "题.\n";
  subjectText += data.head + '\n';
  var str = '';

  for(var j = 0; j < data.body.length; j++) {
    str += String.fromCharCode('A'.charCodeAt() + j) + '：' + data.body[j] + "\n";
  }

  str += '\n' + "正确答案是：" + data.choiceTrue + " —— 你的选择是：";
  
  if(data.userChoice) {
    str += data.userChoice;
  }

  if(data.userChoice === data.choiceTrue) {
    str += "（答对了）";
  } else {
    str += "（答错了）";
  }

  subjectText += str + '\n\n';
  
  return subjectText;
}

function disposeCompleteSubject(data) {
  var trueCount = 0;
  var allError = [];
  var allSubjectText = [];
  var subjectText = '';
  var SubjectSimpleText = '';
  var errorSubjectText = '';
  
  for(var i = 0; i < data.length; i++) {
    allSubjectText.push("第" + (i+1) + "题. —— " + getViewSubject(data[i]));
    
    if(data[i].userChoice === data[i].choiceTrue) {
      trueCount++;
    } else {
      allError.push(allSubjectText[i]);
    }
  }
  
  subjectText = allSubjectText.join('');
  submitView.innerText = "共有"+ data.length + "道题。你做对了" + trueCount + "道题";
  submitView.innerText += "\n\n" + subjectText;
  
  errorSubjectText = allError.join('');
  submitError.innerText = "你做错了" + allError.length + "道题" + "\n\n";
  submitError.innerText += errorSubjectText;
}

function hideDom() {
  var dom;
  for(var i = 0; i < arguments.length; i++) {
    dom = arguments[i];
    dom.classList.add("hide");
  }
}

function visibilityDom() {
  var dom;
  for(var i = 0; i < arguments.length; i++) {
    dom = arguments[i];
    dom.classList.add("visibility");
  }
}

function showDom() {
  var dom;
  for(var i = 0; i < arguments.length; i++) {
    dom = arguments[i];
    dom.classList.remove("hide");
    dom.classList.remove("visibility");
  }
}

function getMousePos(event) {
  var e = event || window.event;
  var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  var x = e.pageX || e.clientX + scrollX;
  var y = e.pageY || e.clientY + scrollY;
  return { 'x': x, 'y': y };
}

function randomNum(minNum, maxNum) {
  switch(arguments.length){ 
    case 1: 
      return parseInt(Math.random()*minNum+1,10); 
      break; 
    case 2: 
      return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
    default: 
      return 0; 
      break; 
  } 
}

function message(txt, event) {
  var BODY = document.getElementsByTagName("body")[0];
  var messDom = document.createElement('div');
  messDom.className = 'message';
  messDom.innerText = txt;

  BODY.appendChild(messDom);

  messDom.style.top = getMousePos(event).y - messDom.clientHeight - 6 + 'px';
  messDom.style.left = getMousePos(event).x + 6 + 'px';
  
  var t = 50;
  
  function move() {
    if(t === 0) {
      BODY.removeChild(messDom);
      return true;
    } else {
      messDom.style.top = Number(messDom.style.top.slice(0, -2)) - randomNum(1, 4) + 'px';
      t--;
      window.requestAnimationFrame(move);
    }
  }
  window.requestAnimationFrame(move);
}

function setTime(us, um , uh) {
  var s = us || 0;
  var m = um || 0;
  var h = uh || 0;

  var t = setInterval(function() {
    var ds,dm,dh;
    s++;
    if(s == 60) {
      m++;
      s = 0;
      saveUser();
    }

    if(m == 60) {
      h++;
      m = 0;
    }

    if(s < 10) {
      ds = '0' + s;
    } else {
      ds = s;
    }

    if(m < 10) {
      dm = '0' + m + ':';
    } else {
      dm = m + ':';
    }

    if(h < 10) {
      dh = '0' + h + ':';
    } else {
      dh = h + ':';
    }

    passTime.innerText = dh + dm + ds;

    user.time = {h: h,m: m,s: s};
  }, 1000);

  return function() {
    passTime.innerText = '00:00:00';
    clearInterval(t);
  };
}

function addASiderLine(content,number) {
  var siderLine = document.createElement('a');
  siderLine.className = 'sider-line';
  siderLine.innerText = number + 1 + '.' + content;
  siderLine.onclick = function() {
    user.index = number;
    displaySubject(user.subjectData[number]);
  };
  siderContent.appendChild(siderLine);
}

function displaySiderLine(data) {
  siderContent.innerText = "";
  
  for(var i = 0; i < data.length; i++) {
    addASiderLine(data[i].head, i);
  }
}

function hideAllPage() {
  hideDom(startControl, submitView, submitSimple, submitError);
}

function displayTheme(name) {
  if(!name) {
    return false;
  }
  
  var themeUrl = "./css/theme/" + name + ".css";
  var themeId = name + "Theme";
  var themeDom = document.createElement('link');
  
  themeDom.rel = "stylesheet";
  themeDom.type = "text/css";
  themeDom.href = themeUrl;
  themeDom.id = themeId;
  themeDom.className = "theme";
  
  document.head.appendChild(themeDom);
  
  return themeDom;
}

function removeTheme(dom) {
  document.head.removeChild(dom);
}
