import Customer from "../../Domain/entities/Customer";
import IRepository from "../../Domain/interfaces/IRepository";

export default class CustomerService{
    constructor(private repo: IRepository<Customer>) {
        
    }

    getCustomerById(id: string){
        console.log("From service")
        //Validation
        //business rules 
        let result = this.repo.getById(id);
        //checks

        return result;
    }
}
