const router = require("express").Router();
const rebillySDK = require("../lib/rebilly-api");

const { REBILLY_WEBSITE_ID } = require("../config/config");

const customerId = "ambrosio-ander";

router.post("/", async (req, res, next) => {
  try {
    const response = await rebillySDK.depositRequests.create({
      data: {
        websiteId: REBILLY_WEBSITE_ID,
        customerId,
        currency: "USD",
        strategyId: "dep_str_01JFHNTD2TXWCB6QWD7YE7R92H",
      },
    });
    const token = response.fields.cashierToken;
    res.send({ token });
  } catch (error) {
    if (error?.response?.data) {
      console.error(error.response.data);
    } else {
      console.error(error);
    }
  }
});

module.exports = router;
