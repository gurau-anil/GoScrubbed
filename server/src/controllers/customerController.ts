import { Request, Response } from "express";
import CustomerService from "../Application/services/CustomerService";
import Repository from "../Infrastructure/repositories/Repository";
import Customer from "../Domain/entities/Customer";
import { BaseEntity } from "../Domain/entities/BaseEntity";

export default class CustomerController{
    constructor(private customerService: CustomerService) {
        
    }

    getCustomerData(req: Request, res:Response){
        console.log("inside controller")

        let result = this.customerService.getCustomerById("random");

        res.send(result);
    }
}