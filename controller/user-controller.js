import User from "../model/userSchema.js";


export const userSignup = async (req, res) => {

    try {
        const exist = await User.findOne({username : req.body.username})
        if (exist)
        {
            return res.status(401).json('User already exist')
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        res.status(200).json('User is successful registered')

    } catch (error) {

        console.log(error.message);

    }
}


export const userLogin = async (req, res) => {

        try {

            let user = await User.findOne({username : req.body.username, password : req.body.password});

            if(user)
            {
                return res.status(200).json(`${req.body.username} login successful`)
            }   
            else{
                return res.status(401).json('Invalid Login')
            }
              } catch (error) {

                    console.log(error.message);
            }


}