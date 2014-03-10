module.exports = function(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    return res.forbidden('You are not permitted to perform this action.');
  }

};
