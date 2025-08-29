import CustomerDTO from "../../dtos/customerDTO";
import IService from "./IService";

export default interface ICustomerService extends IService{
    getCustomerById(id: string): Promise<CustomerDTO>;
}

