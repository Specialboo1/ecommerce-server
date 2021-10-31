import mongoose from "mongoose";


const connection =  async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.k6puc.mongodb.net/ecommerce?retryWrites=true&w=majority`
    try {
        mongoose.connect(URL, {useNewUrlParser : true, useUnifiedTopology : true} )
        console.log("Database successfully connected")
    } catch (error) {
        console.log(error.message)
    }  
}

export default connection