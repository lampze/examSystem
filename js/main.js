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

function disposeCompleteSubject(data) {
  var trueCount = 0;
  var subjectText = '';
  for(var i = 0; i < data.length; i++) {

    subjectText += "第"+ (i + 1) + "题. —— 总题库中第" + (data[i].number + 1) + "题.\n";
    subjectText += data[i].head + '\n';
    var str = '';

    for(var j = 0; j < data[i].body.length; j++) {
      str += String.fromCharCode('A'.charCodeAt() + j) + '：' + data[i].body[j] + "\n";
    }

    str += '\n' + "正确答案是：" + data[i].choiceTrue + " —— 你的选择是：";

    if(data[i].userChoice) {
      str += data[i].userChoice;
    }

    if(data[i].userChoice === data[i].choiceTrue){
      trueCount++;
      str += "（答对了）";
    } else {
      str += "（答错了）";
    }

    subjectText += str + '\n\n';
  }

  submitView.innerText = "共有"+ data.length + "道题。你做对了" + trueCount + "道题";
  submitView.innerText += "\n\n" + subjectText;
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
  hideDom(startControl, submitView);
}


var subject = getElements("subject");
var subjectNumber = getElements("subject-number");
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
var tagSubmitSimple = getElements("tag-submit-simple");
var tagSubmitError = getElements("tag-submit-error");
var passTime = getElements("pass-time");
var siderContent = getElements('sider-content');

var user = {};

var timeClear;

var btnSelect = "btn-select";
var btnUnselect = "btn-unselect";



// // 为ie10以下做classList做兼容 -开始-

if (!("classList" in document.documentElement)) {
  Object.defineProperty(HTMLElement.prototype, 'classList', {
    get: function() {
      var self = this;
      function update(fn) {
        return function(value) {
          var classes = self.className.split(/\s+/g),
              index = classes.indexOf(value);

          fn(classes, index, value);
          self.className = classes.join(" ");
        };
      }

      return {
        add: update(function(classes, index, value) {
          if (!~index) classes.push(value);
        }),

        remove: update(function(classes, index) {
          if (~index) classes.splice(index, 1);
        }),

        toggle: update(function(classes, index, value) {
          if (~index)
            classes.splice(index, 1);
          else
            classes.push(value);
        }),

        contains: function(value) {
          return !!~self.className.split(/\s+/g).indexOf(value);
        },

        item: function(i) {
          return self.className.split(/\s+/g)[i] || null;
        }
      };
    }
  });
}

// // 为ie10以下做classList做兼容-结束-


// 为ie兼容requestAnimationFrame --结束--

// Adapted from https://gist.github.com/paulirish/1579671 which derived from 
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon

// MIT license

if (!Date.now)
    Date.now = function() { return new Date().getTime(); };

(function() {
    'use strict';
    
    var vendors = ['webkit', 'moz'];
    for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
        var vp = vendors[i];
        window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
        window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
                                   || window[vp+'CancelRequestAnimationFrame']);
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
        || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
        var lastTime = 0;
        window.requestAnimationFrame = function(callback) {
            var now = Date.now();
            var nextTime = Math.max(lastTime + 16, now);
            return setTimeout(function() { callback(lastTime = nextTime); },
                              nextTime - now);
        };
        window.cancelAnimationFrame = clearTimeout;
    }
}());

// 为ie兼容requestAnimationFrame --结束--


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
  var minSubjectNum = getElements("min-subject-num").value;
  var maxSubjectNum = getElements("max-subject-num").value;
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
  
  if(subjectRandNum.value > maxSubjectNum - minSubjectNum + 1) {
    message("你选中的只有"+(maxSubjectNum-minSubjectNum+1)+"道题，不能随机出"+subjectRandNum.value+"道题", e);
    return false;
  }

  if(isRand) {
    if(checkIntNum(subjectRandNum.value)) {
      user.subjectData = getRandSubject(examData.slice(minSubjectNum-1, maxSubjectNum), subjectRandNum.value);
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
  showDom(showPage, coverPage, tagStart, tagSubmitView, submitView);

  hideDom(startControl);

  disposeCompleteSubject(user.subjectData);

  delete window.localStorage.user;

  timeClear();
};

tagStart.onclick = function() {
  hideAllPage();
  showDom(startControl);
}

tagSubmitView.onclick = function() {
  hideAllPage();
  showDom(submitView);
}

closePage.onclick = function() {
  hideDom(showPage, coverPage);
  
  if(user.time) {
    timeClear = setTime(user.time.s, user.time.m, user.time.h);
    saveUser();
  }
};

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
};
