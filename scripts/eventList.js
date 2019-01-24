class EventList {
  constructor(name, list = []) {
    this.name = name
    this.list = list
  }
//possibly give default value of empty array on instantiation
  addEvent(name, city, date) {
    event = new Event(name, city, date)
    this.list.unshift(event)
  }

  eventOrder() {
    this.list.sort(function (a,b) {
      return a.datetime - b.datetime;
    });
  }

}
