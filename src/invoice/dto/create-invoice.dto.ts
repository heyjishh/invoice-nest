export class CreateInvoiceDto {
    invoiceNo: number;
    invoiceDate: string;
    billTo: string;
    dueDate: string;
    billToAddress: string;
    billToCity: string;
    phone: number;
    description: string;
    tax: number;
    user: Object;
}
