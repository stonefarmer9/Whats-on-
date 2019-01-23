spec('Events are stored with a name', function(){
  heresy = new Event('Dropsite massacre','Istvaan V', '12/02/2019', '15:30')
  expectEquality(heresy.name, 'Dropsite massacre')
})


spec('Events are stored with a date', function(){
  heresy = new Event('Dropsite massacre','Istvaan V', '12/02/2019', '15:30')
  date = new Date('12/02/2019')
  expectEquality(heresy.date.getTime(), date.getTime())
})

spec('Events are stored with a time', function(){
  heresy = new Event('Dropsite massacre','Istvaan V', '12/02/2019', '15:30')
  expectEquality(heresy.time, '15:30')
})

spec('Events are stored with a City', function(){
  heresy = new Event('Dropsite massacre','Istvaan V', '12/02/2019', '15:30')
  expectEquality(heresy.city, 'Istvaan V')

})
