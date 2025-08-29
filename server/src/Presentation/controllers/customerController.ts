import { Request, Response } from "express";
import CustomerService from "../../Application/services/CustomerService";
import Repository from "../../Infrastructure/repositories/Repository";
import Customer from "../../Domain/entities/Customer";
import { BaseEntity } from "../../Domain/entities/BaseEntity";
import ICustomerService from "../../Application/services/interfaces/ICustomerService";

export default class CustomerController{
    //This ICstomerService is injected at runtime, meaning it doesnot know which instance it is gonna get at the time of writing this controller.
    //Class that implements ICustomerService, its instance can be injected in place of ICustomerService in this case CustomerService class instance. 
    // If another class implements ICustomerService, then its instance can also be passed in place of ICustomerService at the time we instantiate the CustomerController, depending on the situation.
    //Note: outer layer of onion Architecture can only use inner layer not vicversa.
    constructor(private customerService: ICustomerService) {
        
    }

    getCustomerData(req: Request, res:Response){
        console.log("inside controller")
        let result = this.customerService.getCustomerById("random");

        res.send(result);
    }
}