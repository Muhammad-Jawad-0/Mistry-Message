import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";

export const POST = async (resquest: Request) => {
    await dbConnect()
    try {
        const { username, email, password } = await resquest.json()
    } catch (error) {
        console.error("Error Registering User", error)
        return Response.json(
            {
                success: false,
                message: "Error Registering User"
            },
            {
                status: 500
            }
        )
    }
}