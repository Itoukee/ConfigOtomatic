import AuthService from "../services/auth.service";
import { IUser } from "../models/user";
import config from "../config"
import axios from "axios";

import 'dotenv/config'

const url: string = config.google.web.javascript_origins[0];

const userFixtures = {
    createAdmin: async () => {
        await axios.post(`${url}/auth/create`, {
            params: {
                mail: "admin@gmail.com",
                password: process.env.ADMIN_ACCOUNT_PASSWORD
            }
        })
    },
    createDefaultUser: async () => {

    },
}

export default userFixtures;