export class Policy
{
    id:string;
    email:string;
    amountInsured:string;
    inceptionDate:string;
    installmentPayment:boolean;
    clientId:string;    
    /**
     *
     */
    constructor() {
        this.id = '';
        this.amountInsured = '';
        this.email = '';
        this.inceptionDate = '';
        this.installmentPayment = false;
        this.clientId = '';
    }
}