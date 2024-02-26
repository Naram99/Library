function borrowDecorator(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            console.log(`Borrowing items...`);
            originalMethod.apply(this, args);
        }
}