const halls = require("../Schema/HallData");

const createHalls = async (data) => {
  try {
    let hall = new halls(data);
    await hall.save();
    return { status: "Hall created Successfully", error: null };
  } catch (err) {
    console.log("Error in creating Halls: ", err);
    return { status: "hall could not be created", error: err };
  }
};

const getHalls = async () => {
  try {
    let halls_instances = await halls.find({}).select({ _id: 0, __v: 0 });
    console.log(`Returning all the halls: ${halls_instances}`);
    return { status: "User found", hall: halls_instances, error: null };
  } catch (e) {
    console.error(`Could not return all the halls`, "\nerror: ", e);
    return { status: "User not found", hall: null, error: e };
  }
};
module.exports = { CreateHall: createHalls, FindHalls: getHalls };
