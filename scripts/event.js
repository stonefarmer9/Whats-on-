class Event {
  constructor(name, date, time){
    this.name = name
    this.date = new Date(date)
    this.time = time
    this.datetime = this.date.getTime();
  }

}
