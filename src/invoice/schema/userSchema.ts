import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { Invoice } from './invoiceSchema';

export type UserDocument = UserSchema & Document;

@Schema()
export class UserSchema {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true, type: String })
    password: string;

    @Prop({ required: true, type: String })
    email: string;

    @Prop({ required: true, type: String })
    firstName: string;

    @Prop({ required: true, type: String })
    lastName: string;

    @Prop({ required: true, type: String })
    role: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }] })
    invoices: Invoice[];
}


export const userSchema = SchemaFactory.createForClass(UserSchema)
