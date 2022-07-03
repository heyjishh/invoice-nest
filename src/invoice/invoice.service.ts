import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice, InvoiceDocument } from './schema/invoiceSchema';

@Injectable()
export class InvoiceService {

  constructor(@InjectModel(Invoice.name) private InvoiceModel: Model<InvoiceDocument>) { }

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    try {
      const model = new this.InvoiceModel(createInvoiceDto);
      return await model.save()
    } catch (error) {
      console.log(error.message);
    }
  }

  async findAll() {
    try {
      return await this.InvoiceModel.find().exec();
    } catch (error) {
      console.log(error.message);

    }
  }

  async findOne(id: string): Promise<Invoice> {
    try {
      return await this.InvoiceModel.findById(id).exec();
    } catch (error) {
      console.log(error.message);

    }
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    try {
      return await this.InvoiceModel.updateOne({ _id: id }, updateInvoiceDto).exec();
    } catch (error) {
      console.log(error.message);
    }
  }

  async remove(id: string) {
    try {
      return await this.InvoiceModel.deleteOne({ _id: id }).exec();
    } catch (error) {
      console.log(error.message);
    }
  }
}
