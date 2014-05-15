# wc

## Run the app

1. Install node/npm
  + install `nvm: curl https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh`
  + `nvm install 0.10.26`
  + `nvm alias default 0.10.26`
2. Install mongo: `sudo apt-get install mongodb-server`
3. Install server dependencies: `(sudo) npm install`
4. Install client dependencies: `bower install`
5. Create some sample data: `grunt create_sample_data`
6. Start the app: `npm start`