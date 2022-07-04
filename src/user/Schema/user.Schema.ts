import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type UserDocument = User & Document;

@Schema({
    timestamps: true,
    strict: false,
    validateBeforeSave: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    collection: 'users',
},)
export class User {
    @Prop({ type: String, required: true })
    name: String;

    @Prop({ type: String, required: true })
    email: String;

    @Prop({ type: Number, required: true })
    phone: Number;

    @Prop({ type: String, required: true })
    password: String;

    @Prop({ type: Boolean, required: true, default: false })
    status = Boolean;

    @Prop({ type: Boolean, default: false })
    isAdmin: Boolean;

    @Prop({ type: String, enum: ['admin', 'user'], default: 'user' })
    userType: String

}


export const userSchema = SchemaFactory.createForClass(User);
