const Joi = require("joi");
const path = require("path");

const config = {
  client_id: "78c09e9ecdf9c48ec927",
  redirect_uri: "http://localhost:3000/repos",
  client_secret: "c0dd810093d60545bde2c06680c0cf0904961d38",
  proxy_url: "http://localhost:5000/authenticate"
};

module.exports = config;
