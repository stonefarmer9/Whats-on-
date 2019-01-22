spec('A new event is added to the events list', function(){
  var events = new EventList('Events')
  events.addEvent('Istvaan V', '12/02/18')
  console.log(events.list[0])
  expectEquality(events.list.length, 1)
})
