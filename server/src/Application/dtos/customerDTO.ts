export default class CustomerDTO{
    email: string;
    name: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }   
}