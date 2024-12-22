const RebillyAPI = require("rebilly-js-sdk").default;
const {
  REBILLY_API_SECRET_KEY,
  REBILLY_ORGANIZATION_ID,
} = require("../config/config");

const rebillySDK = RebillyAPI({
  organizationId: REBILLY_ORGANIZATION_ID,
  sandbox: true,
  apiKey: REBILLY_API_SECRET_KEY,
});

module.exports = rebillySDK;
