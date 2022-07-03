import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

import { UserSchema } from './userSchema';

export type InvoiceDocument = Invoice & Document;

@Schema({
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
})
export class Invoice {
    @Prop({ required: true, unique: true })
    invoiceNo: number;

    @Prop({ required: true, type: String })
    invoiceDate: string;

    @Prop({ required: true, type: String })
    billTo: string;

    @Prop({ required: true, type: String })
    dueDate: string;

    @Prop({ required: true, type: String })
    billToAddress: string;

    @Prop({ required: true, type: String })
    billToCity: string;

    @Prop({ required: true, type: Number })
    phone: number;

    @Prop({ required: true, type: String })
    description: string;

    @Prop({ required: true, type: Number })
    tax: number;

    //Joining Two Documents
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UserSchema' })
    user: UserSchema;

}

export const invoiceSchema = SchemaFactory.createForClass(Invoice)
