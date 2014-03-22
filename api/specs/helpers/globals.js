bcrypt = require('bcrypt')
Q = require('q')

proxyquire = require('proxyquire').noCallThru();

chai = require('chai')
chai.use(require("chai-as-promised"))
chai.use(require("sinon-chai"))
expect = chai.expect
should = chai.should()

sinon = require('sinon')
sinonSandbox = sinon.sandbox.create()