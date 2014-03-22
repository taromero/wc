RosieFactory.define('request')
  .attr('body', function(i) {
    return { email: 'a', password: 'b' }
  })
  .attr('session', function() {
    return {}
  })