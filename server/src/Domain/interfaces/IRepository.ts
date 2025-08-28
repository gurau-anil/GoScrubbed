export default interface IRepository<T> {
    getById(id: string): Promise<T | null>;
    get(): Promise<T[]>;
    create(item: T): Promise<T>;
    update(id: string, item: T): Promise<T | null>;
    delete(id: string): Promise<boolean>;
}
