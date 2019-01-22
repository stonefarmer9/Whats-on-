class EventList {
  constructor(name) {
    this.name = name
    this.list = []
  }

  addEvent(name) {
    this.list.unshift(name)
  }

}
