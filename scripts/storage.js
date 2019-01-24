function storeEvents (array) {
  localStorage.setItem("Event_Info", JSON.stringify(array));
};

function retrieveEvents () {
  var eventString = localStorage.getItem("Event_Info");
  JSON.parse(eventString)
};
