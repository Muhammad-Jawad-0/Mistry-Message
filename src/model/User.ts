import mongoose, { Schema, Document } from "mongoose";

export interface Massage extends Document {
    content: string;
    createdAt: Date

}

const MassageSchema: Schema<Massage> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})