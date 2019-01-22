class EventList {
  constructor(name) {
    this.name = name
    this.list = []
  }

  addEvent(name, date) {
    event = new Event(name, date)
    this.list.unshift(event)
  }

}
