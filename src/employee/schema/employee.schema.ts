import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Profile } from "./profile.schema";

@Schema({ timestamps: true })

export class Employee extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({type: MongooseSchema.Types.ObjectId, ref: 'Profile'})
    profile: Profile
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);