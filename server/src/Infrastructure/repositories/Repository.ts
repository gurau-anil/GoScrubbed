import Customer from "../../Domain/entities/Customer";
import ICustomerRepository from "../../Domain/interfaces/ICustomerRepository";

class Repository implements IRepository<T> {
    private customers: Customer[] = [];

    async findById(id: string): Promise<Customer | null> {
        return this.customers.find(customer => customer.id === id) || null;
    }

    async findAll(): Promise<Customer[]> {
        return this.customers;
    }

    async create(customer: Customer): Promise<Customer> {
        this.customers.push(customer);
        return customer;
    }

    async update(id: string, customer: Customer): Promise<Customer | null> {
        const index = this.customers.findIndex(c => c.id === id);
        if (index === -1) return null;
        this.customers[index] = customer;
        return customer;
    }

    async delete(id: string): Promise<boolean> {
        const index = this.customers.findIndex(c => c.id === id);
        if (index === -1) return false;
        this.customers.splice(index, 1);
        return true;
    }
}
