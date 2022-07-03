import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';
import { Invoice, invoiceSchema } from './schema/invoiceSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Invoice.name, schema: invoiceSchema }])],
  controllers: [InvoiceController],
  providers: [InvoiceService]
})
export class InvoiceModule { }
