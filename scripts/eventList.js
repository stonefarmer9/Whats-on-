class EventList {
  constructor(name) {
    this.name = name
    this.list = []
  }

  addEvent(name, date, time) {
    event = new Event(name, date, time)
    this.list.unshift(event)
  }

}
