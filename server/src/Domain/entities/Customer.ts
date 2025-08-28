import {BaseEntity, IBaseEntity} from "./BaseEntity";

class Customer extends BaseEntity {

    constructor(
        public name: string,
        public email: string,
    ) {
        super();
    }
}


export default Customer;
