import Customer from "../entities/Customer";
import IRepository from "./IRepository";

interface ICustomerRepository extends IRepository<Customer>{

}

export default ICustomerRepository;