RosieFactory.define('login_user')
  .sequence('email', function(i) {
    return 'email' + i + '@zauberlabs.com'
  })
  .sequence('password', function(i) {
    return 'password' + i
  })
  .attr('toSession', function() {
    return function() {
      return { email: this.email }
    }
  })