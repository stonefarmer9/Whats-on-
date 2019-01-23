class Event {
  constructor(name, city, date, time){
    this.name = name
    this.city = city
    this.date = new Date(date)
    this.time = time
    this.datetime = this.date.getTime();
  }

}
