function getElements(dom) {
  return document.getElementsByClassName(dom)[0];
}

var subject = getElements("subject");
var optA = getElements("opt-A");
var optB = getElements("opt-B");
var optC = getElements("opt-C");
var optD = getElements("opt-D");

function displaySubject(subDom, dataObj) {
  let str = dataObj.head + "\n\n";
  for(let i = 0; i < dataObj.body.length; i++) {
    str += String.fromCharCode('A'.charCodeAt() + i) + '：' + dataObj.body[i] + "\n";
  }
  subDom.innerText = str;
}
displaySubject(subject, examData[1000]);
