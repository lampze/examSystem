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
      option[i].classList.remove("btn-default");
      option[i].classList.add("btn-primary");
    } else {
      option[i].classList.remove("btn-primary");
      option[i].classList.add("btn-default");
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



var subject = getElements("subject");
var option = getElements("option");
var randOrNot = getElements("randOrNot");
var subjectTotal = getElements("subject-total");
var subjectRandNum = getElements("subject-rand-num");
var examStart = getElements("exam-start");
var startControl = getElements("start-control");
var arrowAfter = getElements("arrow-after");
var arrowNext = getElements("arrow-next");
var submit = getElements("submit");
// var coverPage = getElements("cover-page")[0];
// var submitPage = getElements("submit-page")[0];
// var closeSubmit = getElements("close-submit")[0];
var submitView = getElements("submit-view");
// var backSubmit = getElements("back-submit")[0];
var showPage = getElements("show-page");
var coverPage = getElements("cover-page");
var closePage = getElements("close-page");

var user = {};



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

subjectTotal.innerText = examData.length;

// // 使用匿名函数来去掉了let，解决了ie无法使用let的问题. --开始--

(function() {
  for(var i = 0; i < option.length; i++) {
    (function(i) {
      option[i].onclick = function() {
        option[i].classList.remove("btn-default");
        option[i].classList.add("btn-primary");

        if(user.subjectData) {
          user.subjectData[user.index].userChoice = option[i].innerText;
          saveUser();
        }

        for(var j = 0; j < option.length; j++) {
          if(j != i) {
            option[j].classList.remove("btn-primary");
            option[j].classList.add("btn-default");
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

arrowNext.onclick = function() {
  if(user.index == user.subjectData.length - 1) {
    return false;
  } else {
    displaySubject(user.subjectData[user.index + 1]);
    user.index++;
  }
  saveUser();
};

arrowAfter.onclick = function() {
  if(user.index == 0) {
    return false;
  } else {
    displaySubject(user.subjectData[user.index - 1]);
    user.index--;
  }
  saveUser();
};

examStart.onclick = function() {
  var minSubjectNum = getElements("min-subject-num").value;
  var maxSubjectNum = getElements("max-subject-num").value;
  var isRand = randOrNot.checked;
  if(!checkIntNum(minSubjectNum) || !checkIntNum(maxSubjectNum)) {
    return false;
  }

  if(isRand) {
    if(checkIntNum(subjectRandNum.value)) {
      user.subjectData = getRandSubject(examData.slice(minSubjectNum-1, maxSubjectNum), subjectRandNum.value);
    } else {
      return false;
    }
  } else {
    user.subjectData = getSubject(examData, minSubjectNum, maxSubjectNum);
  }

  displaySubject(user.subjectData[0]);
  user.index = 0;

  saveUser();

  hideDom(showPage, coverPage, startControl);
};

submit.onclick = function() {
  showDom(showPage, coverPage);

  for(var i = 0; i < option.length; i++ ) {
    option[i].classList.remove("btn-primary");
    option[i].classList.add("btn-default");
  }

  disposeCompleteSubject(user.subjectData);

  user = {};
  delete window.localStorage.user;
};

// closeSubmit.onclick = function() {
//   subject.innerText = "";
//   arrowAfter.classList.add("hide");
//   arrowNext.classList.add("hide");
//   submit.classList.add("hide");
//   startControl.classList.remove("hide");

//   for(var i = 0; i < option.length; i++ ) {
//     option[i].classList.remove("btn-primary");
//     option[i].classList.add("btn-default");
//   }

//   coverPage.classList.add("hide");
//   submitPage.classList.add("hide");

//   user = {};
//   delete window.localStorage.user;
// };

// backSubmit.onclick = function() {
//   coverPage.classList.add("hide");
//   submitPage.classList.add("hide");
// };

window.onload = function() {
  if(window.localStorage.user) {
    var localUser = JSON.parse(localStorage.user);

    if(localUser.subjectData) {
      user = localUser;
      displaySubject(user.subjectData[user.index]);
    }
  } else {
    showDom(coverPage, showPage);
  }
};

closePage.onclick = function() {
  hideDom(showPage, coverPage);
};
