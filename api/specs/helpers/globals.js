bcrypt = require('bcrypt')
q = require('q')

require("mocha-as-promised")()

chai = require('chai')
chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
expect = chai.expect
should = chai.should()

login_service = require('../../services/login_service')
profile_helper = require('../../helpers/profile_helper')
User = require('../../models/User')