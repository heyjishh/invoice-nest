import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/Schema/user.Schema';



export type InvoiceDocument = Invoice & Document;

@Schema({
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    validateBeforeSave: true,
    strict: false,
    versionKey: false,
    collection: 'invoices',
})

export class Invoice {
    @Prop({ required: true, unique: true })
    invoiceNo: number;

    @Prop({ required: true })
    invoiceDate: string;

    @Prop({ required: true })
    billTo: string;

    @Prop({ required: true })
    dueDate: string;

    @Prop({ required: true })
    billToAddress: string;

    @Prop({ required: true })
    billToCity: string;

    @Prop({ required: true })
    phone: number;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    tax: number;

    // //Joining Two Documents
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: mongoose.Schema.Types.ObjectId;

}

export const invoiceSchema = SchemaFactory.createForClass(Invoice)
