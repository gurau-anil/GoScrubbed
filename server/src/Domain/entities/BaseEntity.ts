interface IBaseEntity{
    id: string;
    createdOn: Date
    updatedOn: Date // audit columns
}

class BaseEntity implements IBaseEntity{
    id: string = "";
    createdOn: Date = new Date();
    updatedOn: Date = new Date();
}

export {IBaseEntity, BaseEntity};