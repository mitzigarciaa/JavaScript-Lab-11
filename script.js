// Base class for product properties
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }


    // Method
    getTotalValue() {
        return this.price * this.quantity;
    }


    // Method to return a string representation of the product
    toString() {
        return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
}


// Example
let product = new ProductProperties('Apple', 2.50, 50);
console.log(product.getTotalValue());
console.log(product.toString());


// Subclass for perishable product properties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // Call the parent class constructor
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}

let perishableProduct1 = new PerishableProductProperties('Milk', 1.50, 10, '2024-12-31');
let perishableProduct2 = new PerishableProductProperties('Yogurt', 2.00, 15, '2025-01-15');

