import user from "../Model/user.js";
import dbConnect from "../lib/dbConnect.js";


const createUser = async ({ name, email, phone, orderId }) => {
  dbConnect();

  try {
    const newUser = await user(
      {
        name: name,
        email: email,
        phone: phone,
        orderId: orderId
      }
    );

    newUser.save();

    return newUser;
  } catch (error) {
    console.log(error);

  }
}

export default createUser;