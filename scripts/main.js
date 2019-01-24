var SubmitEvent = document.getElementById("SubmitEvent")

let eventList =
  localStorage.getItem('events') ?
  JSON.parse(localStorage.getItem('events')) :
  new EventList("events");

localStorage.setItem('events', JSON.stringify(eventList));
console.dir(eventList, '1 - eventList')
const data = JSON.parse(localStorage.getItem('events'));

var whatsOn = new EventList("events");

data.forEach(function(object){
  console.log(object)
  var event = new Event(object.name, object.city, object.date, object.datetime)
  whatsOn.list.unshift(event)
});

whatsOn.eventOrder()
listEvents()

console.log("whatsOn", whatsOn)
console.log(data, '2 - data')
console.dir(data)
// this is causing problems - instatiating
// a new class and copying the details doesn't seem to work.
// localstorage persists, after page refresh, then when a new event is added.
// the localstorage gets wiped.
// may need a CLASS/STATIC method in EventList to parse the JSON string and convert it to the eventList object.
// RESEARCH - STATIC PARSING METHOD -- STATIC METHODS: MDN, W3S,
// -- CONVERT JSON OBJECT TO ORIGINAL OBJECT
// -- JSON.Parse() idiosynchrocies


// current theory is that the objects JSON is returning are note EventList objects,
// as per console.logs, and as such cannot use the methods defined there
// test if what returns is an instance of eventList
// how to convert a JSON objects to the original stored object
// inflating, deflating, serialising,

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
