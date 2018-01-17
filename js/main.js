function getElements(dom) {
  return document.getElementsByClassName(dom);
}

var subject = getElements("subject")[0];
var option = getElements("option");
var randOrNot = getElements("randOrNot")[0];
var subjectTotal = getElements("subject-total")[0];
var subjectTime = getElements("subject-time")[0];

var user = {};

for(let i = 0; i < option.length; i++) {
  var obj = option[i];
  obj.onclick = function() {
    var opt = option[i];
    opt.classList.remove("btn-default");
    opt.classList.add("btn-primary");

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
}

subjectTotal.innerText = examData.length + 1;



function displaySubject(subDom, dataObj) {
  let str = dataObj.head + "\n\n";
  for(let i = 0; i < dataObj.body.length; i++) {
    str += String.fromCharCode('A'.charCodeAt() + i) + '：' + dataObj.body[i] + "\n";
  }
  subDom.innerText = str;
}

var cloneObj = function (obj) {
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

var randSubject = getRandSubject(examData, 50);
displaySubject(subject, randSubject[0]);
