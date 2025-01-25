import user from "../Model/user.js";
import dbConnect from "../lib/dbConnect.js";

dbConnect();

const createUser = async ({ name, email, phone, orderId }) => {
  
  try {
    const newUser = await user.create(
          {
            name:name,
            email:email,
            phone:phone,
            member:{orderId:orderId}
        }
          );

   return newUser;
  } catch (error) {
    console.log(error);
    
  }
}

export default createUser;