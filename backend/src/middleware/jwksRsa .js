const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const authConfig = {
  domain: "dev-iusdj7te.us.auth0.com",
  audience: "https://dev-iusdj7te.us.auth0.com/api/v2/"
};

const jwtOptions = {
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
};

const checkJwt = jwt(jwtOptions);

module.exports = checkJwt;