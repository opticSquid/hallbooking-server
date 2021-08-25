const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("<h1>Server running</h1>");
});
router.use("/login", require("../API/login"));
router.use("/signup", require("../API/signup"));
// router.use("/verify", require("../API/verify"));
// router.use("/logout", require("../API/logout"));
// router.use("/getBooking", require("../API/getbooking"));
// router.use("/getBookingByUser", require("../API/getbookingbyuser"));
// router.use("/createBooking", require("../API/createbooking"));

module.exports = router;
