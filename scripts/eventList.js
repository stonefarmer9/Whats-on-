class EventList {
  constructor(name) {
    this.name = name
    this.list = new Array
  }

  addEvent(name, date, time) {
    event = new Event(name, date, time)
    this.list.unshift(event)
  }

  eventOrder() {
    this.list.sort(function (a,b) {
      return a.datetime - b.datetime;
    });
  }

}
