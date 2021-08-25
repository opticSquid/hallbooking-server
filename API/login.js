const router = require("express").Router();

const newLogin = (req, res, next) => {
  console.log("Request Body: ", req.body);
};

router.post("/", newLogin);

module.exports = router;
