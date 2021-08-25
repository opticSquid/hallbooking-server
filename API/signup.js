const router = require("express").Router();

const newSignUp = (req, res, next) => {
  console.log("Request Body: ", req.body);
};

router.post("/", newSignUp);

module.exports = router;
