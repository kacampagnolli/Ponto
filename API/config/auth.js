var passport = require("passport");
var passportJWT = require("passport-jwt");
var cfg = require("./config.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;
var createConnection = require('../persistencia/connectionFactory')();
var UsuarioDao = require('../persistencia/UsuarioDao')();

var params = { }
params.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
params.secretOrKey = cfg.jwtSecret;

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) {
    var connection = createConnection();
    var usuarioDao = new UsuarioDao(connection);
    usuarioDao.exist(payload.id, function(erro,resultado) {
      if (!erro) {
        return done(null, payload.id);
  
      } else {
        return done(new Error("User not found"), null);
      } 
    });
  });

  passport.use(strategy);
  
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};