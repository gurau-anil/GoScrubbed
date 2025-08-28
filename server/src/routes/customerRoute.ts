import express, { Request, Response } from 'express';
import CustomerController from '../controllers/customerController';
import CustomerService from '../Application/services/CustomerService';
import Repository from '../Infrastructure/repositories/Repository';
import Customer from '../Domain/entities/Customer';

const customerRoutes = express.Router();

const customerRepoInstance = new Repository<Customer>();
const customerServiceInstance = new CustomerService(customerRepoInstance);
const customerController = new CustomerController(customerServiceInstance);


customerRoutes.get('/', (req: Request, res: Response) => customerController.getCustomerData(req, res));
customerRoutes.get('/:id', (req: Request, res: Response) => customerController.getCustomerData(req, res));

export default customerRoutes;