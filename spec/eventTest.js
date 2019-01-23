spec('Events are stored with a name', function(){
  massacre = new Event('Istvaan V')
  expectEquality(massacre.name, 'Istvaan V')
})


spec('Events are stored with a date', function(){
  massacre = new Event('Istvaan III', '12/02/2019', '15:30')
  date = new Date('12/02/2019')
  console.log(massacre, date)
  expectEquality(massacre.date.getTime(), date.getTime())
})

spec('Events are stored with a time', function(){
  massacre = new Event('Istvaan III', '12/02/2019', '15:30')
  expectEquality(massacre.time, '15:30')
})
