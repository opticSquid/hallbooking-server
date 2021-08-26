const router = require("express").Router();

const incomingData = (req, res, next) => {
  const body = req.body;
  console.log("Search Data:", body);
  res.status(200).json({ m: 1 });
};

router.post("/", incomingData);
module.exports = router;
