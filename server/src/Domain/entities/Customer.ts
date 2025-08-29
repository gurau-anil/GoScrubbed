import {BaseEntity, IBaseEntity} from "./BaseEntity";

//This is at the domain layer and is independent of other layers, meaning, it does not import from another layer
class Customer extends BaseEntity {

    constructor(
        public name: string,
        public email: string,
    ) {
        super();
    }
}


export default Customer;
