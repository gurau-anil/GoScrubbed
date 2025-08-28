import {IBaseEntity} from "../../Domain/entities/BaseEntity";
import IRepository from "../../Domain/interfaces/IRepository";

export default class Repository<IBaseEntity> implements IRepository<IBaseEntity> {
    getById(id: string): Promise<IBaseEntity | null> {
        console.log("Inside repo")
        //call mongo db
        throw new Error("Method not implemented.");
    }
    get(): Promise<IBaseEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(item: IBaseEntity): Promise<IBaseEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: IBaseEntity): Promise<IBaseEntity | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

class RepositoryForPostgres implements IRepository<IBaseEntity> {
    getById(id: string): Promise<IBaseEntity | null> {
        //call postgres sql
        throw new Error("Method not implemented.");
    }
    get(): Promise<IBaseEntity[]> {
        throw new Error("Method not implemented.");
    }
    create(item: IBaseEntity): Promise<IBaseEntity> {
        throw new Error("Method not implemented.");
    }
    update(id: string, item: IBaseEntity): Promise<IBaseEntity | null> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
