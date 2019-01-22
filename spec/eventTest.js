spec('A new event is added to the events list', function(){
  var events = new EventList('Event')
  events.addEvent('Istvaan V')
  expectEquality(events.list.length, 1)
})
