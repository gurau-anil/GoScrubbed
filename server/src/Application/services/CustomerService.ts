import Customer from "../../Domain/entities/Customer";
import { NotFoundException } from "../../Domain/exceptions/notFoundException";
import IRepository from "../../Domain/interfaces/IRepository";
import CustomerDTO from "../dtos/customerDTO";
import ICustomerService from "./interfaces/ICustomerService";


//Application layer can use Domain layer, but, not Infrastructure and Presentation layer.
// It is using IRepository, which is declared at domain layer, at this time it does not know anything about the infrastructure layer.
export default class CustomerService implements ICustomerService {
  constructor(private repo: IRepository<Customer>) {}

  async getCustomerById(id: string): Promise<CustomerDTO> {
    try {
      console.log("From service");
      //Validation
      //business rules
      let result: Customer | null = await this.repo.getById(id);
      //checks
      if (result == null) {
        throw new NotFoundException(`Customer not found in the system.`)
      }
      const retVal: CustomerDTO = new CustomerDTO(result.name, result.email);
      return retVal;
    } catch (error: unknown) {
        throw error;
    }
  }
  
}
