spec('Events are stored with a name', function(){
  massacre = new Event('Istvaan V')
  expectEquality(massacre.name, 'Istvaan V')
})
