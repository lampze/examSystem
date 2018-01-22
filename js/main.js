function getElements(dom) {
  return document.getElementsByClassName(dom);
}

function checkIntNum(data) {
  if(!/^\d+$/.test(data))
    return false;
  else
    return true;
}

function displaySubject(dataObj) {
  let str = dataObj.head + "\n\n";
  for(let i = 0; i < dataObj.body.length; i++) {
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
  for(let i = 0; i < time; i++) {
    var isRepeat = true;
    while(isRepeat) {
      var randNum = random(0,data.length);
      isRepeat = false;
      for(let j = 0; j < allRandNum.length; j++) {
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

function selectTrueOption(dataObj) {
  for(let i = 0; i < option.length; i++) {
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



var subject = getElements("subject")[0];
var option = getElements("option");
var randOrNot = getElements("randOrNot")[0];
var subjectTotal = getElements("subject-total")[0];
var subjectTime = getElements("subject-time")[0];
var examStart = getElements("exam-start")[0];
var startControl = getElements("start-control")[0];
var arrowAfter = getElements("arrow-after")[0];
var arrowNext = getElements("arrow-next")[0];
var submit = getElements("submit")[0];

var user = {};



// 为ie10以下做classList做兼容 -开始-

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

// 为ie10以下做classList做兼容-结束-

subjectTotal.innerText = examData.length;

for(let i = 0; i < option.length; i++) {
  option[i].onclick = function() {
    option[i].classList.remove("btn-default");
    option[i].classList.add("btn-primary");

    if(user.subjectData) {
      user.subjectData[user.index].userChoice = option[i].innerText;
      saveUser();
    }

    for(let j = 0; j < option.length; j++) {
      if(j != i) {
        option[j].classList.remove("btn-primary");
        option[j].classList.add("btn-default");
      }
    }
  };
}

randOrNot.onclick = function() {
  if(randOrNot.checked) {
    subjectTime.classList.remove("hide");
  } else {
    subjectTime.classList.add("hide");
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
  var minSubjectNum = getElements("min-subject-num")[0].value;
  var maxSubjectNum = getElements("max-subject-num")[0].value;
  var isRand = randOrNot.checked;
  if(!checkIntNum(minSubjectNum) || !checkIntNum(maxSubjectNum)) {
    return false;
  }

  if(isRand) {
    if(checkIntNum(subjectTime.value)) {
      user.subjectData = getRandSubject(examData.slice(minSubjectNum-1, maxSubjectNum), subjectTime.value);
    } else {
      return false;
    }
  } else {
    user.subjectData = cloneObj(examData.slice(minSubjectNum-1, maxSubjectNum));
  }

  displaySubject(user.subjectData[0]);
  user.index = 0;

  saveUser();

  startControl.classList.add("hide");
  arrowAfter.classList.remove("hide");
  arrowNext.classList.remove("hide");
  submit.classList.remove("hide");
};

submit.onclick = function() {
  subject.innerText = "";
  arrowAfter.classList.add("hide");
  arrowNext.classList.add("hide");
  submit.classList.add("hide");
  startControl.classList.remove("hide");

  for(let i = 0; i < option.length; i++ ) {
    option[i].classList.remove("btn-primary");
    option[i].classList.add("btn-default");
  }

  user = {};
  delete window.localStorage.user;
};

window.onload = function() {
  if(window.localStorage.user) {
    var localUser = JSON.parse(localStorage.user);

    if(localUser.subjectData) {
      user = localUser;
      displaySubject(user.subjectData[user.index]);

      startControl.classList.add("hide");
      arrowAfter.classList.remove("hide");
      arrowNext.classList.remove("hide");
      submit.classList.remove("hide");
    }
  }
};
