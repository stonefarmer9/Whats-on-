var SubmitEvent = document.getElementById("SubmitEvent")

let eventList =
  localStorage.getItem('events') ?
  JSON.parse(localStorage.getItem('events')) :
  new EventList("events");

datatype = eventList instanceof EventList;

localStorage.setItem('events', JSON.stringify(eventList));

const data = JSON.parse(localStorage.getItem('events'));

var whatsOn = new EventList("events");

if (datatype === false) {
eventList.forEach(function(object){
  var event = new Event(object.name, object.city, object.date, object.datetime)
  whatsOn.list.unshift(event)
})};

whatsOn.eventOrder()
listEvents()

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
  var city = document.getElementById("eventcitypost").value
  var date = document.getElementById("datepost").value
  whatsOn.addEvent(name, city, date)
  localStorage.setItem('events', JSON.stringify(whatsOn.list)) // may need to call .list here
}

SubmitEvent.onclick = function() {
  postEvent()
  openInput()
  whatsOn.eventOrder()
  listEvents()
};

function listEvents() {
  currentDate = new Date().getTime();
  var str = '<ul style="list-style-type:none">'
  whatsOn.list.forEach(function(event) {
    if  (event.datetime < currentDate) {
      delete event
    } else {
    str += '<li>' + event.name + " " + `${timeStamp(event.date)} ` + " " + event.city + '</li>';
  }});
  str += '</ul>';
  document.getElementById("eventList").innerHTML = str;
}


function timeStamp (currentDate) {
  return currentDate.toLocaleString('en-GB', { timeZone: 'UTC' });
};
