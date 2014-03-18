bcrypt = require('bcrypt')
q = require('q')

chai = require('chai')
chaiAsPromised = require("chai-as-promised")
chai.use(chaiAsPromised)
expect = chai.expect
should = chai.should()

curry = require('curry')

profile_helper = require('../../helpers/profile_helper')