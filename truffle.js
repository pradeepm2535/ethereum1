var DefaultBuilder = require("truffle-default-builder");

module.exports = {
   build: new DefaultBuilder({ "index.html":"index.html", "app.css":[ "stylesheets/app.css"] }),
   deploy: [
      "MetaCoin",
      "ConvertLib",
      "EthBay"
   ],
   networks: {
	development: {
    host: "localhost",
    port: 8545,
    network_id: "*" ,// Match any network id
    from: "0x9638afed2cae91e868117460b4b2ebdffa1d118a"
  }
}
};