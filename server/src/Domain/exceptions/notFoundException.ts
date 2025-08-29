export class NotFoundException extends Error {
    constructor(message: string = 'Item not found in the system.') {
      super(message);
      this.name = 'NotFoundException';
    }
  }