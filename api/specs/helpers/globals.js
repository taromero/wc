bcrypt = require('bcrypt')
q = require('q')

require("mocha-as-promised")()

chai = require('chai')
chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
expect = chai.expect
should = chai.should()

curry = require('curry')

passport_helper = require('../../helpers/passport_helper')
profile_helper = require('../../helpers/profile_helper')