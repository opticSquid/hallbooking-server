const router = require("express").Router();
const jwt = require("../Middlewares/jwt");
const hallDb = require("../Database/halls");
const getUser = (req, res, next) => {
  const auth = req.headers.token;
  const user = jwt.Verify(auth, process.env.AUTH_SECRET);
  res.locals.user = user;
  console.log("User: ", user);
  next();
};

const booking = (req, res, next) => {
  const body = req.body;
  console.log("request that came in create booking: ", body);
  next();
  //changing string to date
  // let start_date = body.start_date;
  // let end_date = body.end_date;
  // let s_date = new Date(start_date);
  // console.log("s_date: ", s_date);

  //creating new Hall Data
  next();
};
const booking_data = async (req, res, next) => {
  try {
    let bookingList = req.body.Bookings;
    console.log("booking: ", bookingList);
    let booking = req.body.Bookings.push({
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      Email: res.locals.user.Email,
    });
    console.log("booking: ", booking);
    let hall_data = {
      UID: req.body.UID,
      Name: req.body.Name,
      Place: req.body.Place,
      Capacity: req.body.Capacity,
      Bookings: bookingList,
      WaitLists: req.body.WaitLists,
    };
    console.log("hall_data: ", hall_data);
    let responsefromDB = await hallDb.CreateHall(hall_data);
    console.log("response from DB: ", responsefromDB);
    next();
  } catch (error) {
    if (error) {
      console.log("error: ", error);
      res.status(500).json({ status: "Booking Failed", error: error });
    }
  }
};
router.post("/", getUser, booking, booking_data, (req, res) => {
  res.status(200).json({ status: "Booking Successful", error: null });
});
module.exports = router;
