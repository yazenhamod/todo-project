import axios from "axios";

// Global Variables
import { SERVER_URL } from "../Assets/GlobalVariables";

// --- API Functions

const handleRegistration = async (data) => {
    try {
        // Fetch data about user to register
        const response = await axios.post(SERVER_URL + "/handleRegistration", data)

        return response.data
    }
    catch (err) {
        if (err.status === 400) {
            return 400;
        } else {
            console.log(err.response);
        }
    }
}

const handleLogin = async (data) => {
    try {
        // Send username and password to see if match in db
        console.log(data)
        const response = await axios.post(SERVER_URL + "/handleLogin", data)

        return response.data
    }
    catch (err) {
        console.log(err.response);
    }
}


export {
    handleRegistration,
    handleLogin
}