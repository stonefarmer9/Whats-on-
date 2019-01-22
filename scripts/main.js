let whatsOn = new EventList("WhatsOn")

var SubmitEvent = document.getElementById("SubmitEvent")

function openInput() {
var x = document.getElementById("PostEvent");
if (x.style.display === "none") {
x.style.display = "block";
} else {
x.style.display = "none";
}
}

function postEvent() {
  var name = document.getElementById("eventnamepost").value
  var date = document.getElementById("datepost").value
  var time = document.getElementById("timepost").value

  whatsOn.addEvent(name, date, time)
}

SubmitEvent.onclick = function() {
  postEvent()
  openInput()
  listEvents()
  console.log(whatsOn.list)
};

function listEvents() {
  var str = '<ul style="list-style-type:none">'
  whatsOn.list.forEach(function(event) {

    str += '<li>' + event.name + " " + `${timeStamp(event.date)} ` + event.time + '</li>';
  });
  str += '</ul>';
  document.getElementById("eventList").innerHTML = str;
}

function timeStamp (currentDate) {
  var day = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  var dateString = `${day}:${month + 1}:${year}`;
  return dateString
}
