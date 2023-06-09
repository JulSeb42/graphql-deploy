/*=============================================== User model ===============================================*/

import { Schema, model } from "mongoose"

const UserSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
        password: String,
        verified: Boolean,
        verifyToken: String,
        resetToken: String,
        avatar: String,
    },
    { timestamps: true }
)

export const UserModel = model("User", UserSchema)
