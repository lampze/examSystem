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
  function getRealNum(str) {
    switch(str) {
    case 'A':
      return 0;
    case 'B':
      return 1;
    case 'C':
      return 2;
    case 'D':
      return 3;
    default:
      return false;
    }
  }

  for(let i = 0; i < option.length; i++) {
    if(i !== getRealNum(dataObj.userChoice)) {
      option[i].classList.remove("btn-primary");
      option[i].classList.add("btn-default");
    } else {
      option[i].classList.remove("btn-default");
      option[i].classList.add("btn-primary");
    }
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

var user = {};



for(let i = 0; i < option.length; i++) {
  var obj = option[i];
  obj.onclick = function() {
    var opt = option[i];
    opt.classList.remove("btn-default");
    opt.classList.add("btn-primary");
    user.subjectData[user.index].userChoice = option[i].innerText;

    for(let j = 0; j < option.length; j++) {
      if(j != i) {
        var opts = option[j];
        opts.classList.remove("btn-primary");
        opts.classList.add("btn-default");
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
};

arrowAfter.onclick = function() {
  if(user.index == 0) {
    return false;
  } else {
    displaySubject(user.subjectData[user.index - 1]);
    user.index--;
  }
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

  startControl.classList.add("hide");
  arrowAfter.classList.remove("hide");
  arrowNext.classList.remove("hide");
};

subjectTotal.innerText = examData.length + 1;
