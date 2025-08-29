import express, { Request, Response } from 'express';
import CustomerController from '../controllers/customerController';
import CustomerService from '../../Application/services/CustomerService';
import Repository from '../../Infrastructure/repositories/Repository';
import Customer from '../../Domain/entities/Customer';

const customerRoutes = express.Router();

const customerRepoInstance = new Repository<Customer>();
const customerServiceInstance = new CustomerService(customerRepoInstance);
const customerController = new CustomerController(customerServiceInstance);

//Request and response is handled by the Controller
//Onion Architectuure Note: Outer layer of the architecture communicates with the inner layer only with the help of interface. Example: 
//Controller at Presentation layer only communicates with the Services in Application Layer with the help of interface, in this case ICustomerService interface.
// and the dependencies (actual instance) is passed from here, meaning, CustomerController cannot have instance of CustomerService, which will hard couple CustomerController to the CustomerService.
customerRoutes.get('/', (req: Request, res: Response) => customerController.getCustomerData(req, res));
customerRoutes.get('/:id', (req: Request, res: Response) => customerController.getCustomerData(req, res));

export default customerRoutes;