class Event {
  constructor(name, city, date){
    this.name = name
    this.city = city
    this.date = new Date(date)
    this.datetime = this.date.getTime();
  }

}
