import {Schema, SchemaFactory, Prop} from "@nestjs/mongoose"
import { Document } from "mongoose";

@Schema({timestamps: true})
export class Profile extends Document {
    @Prop({required: true})
    age: number;

    @Prop({required: true})
    qualification: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);