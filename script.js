// Part 1 Base class for product properties
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



// part 2 Subclass for perishable product properties
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity); // Call the parent class constructor
        this.expirationDate = expirationDate;
    }

    toString() {
        return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
}


//Part 3 Apply a 10% discount 
ProductProperties.applyDiscount([product1, product2, perishableProduct1, perishableProduct2], 0.1);


let product1 = new ProductProperties('Lipbalm', 2.50, 4);
let product2 = new ProductProperties('Makeup', 20.20, 6);
let perishableProduct1 = new PerishableProductProperties('Milk', 1.50, 10, '2025-9-03');
let perishableProduct2 = new PerishableProductProperties('Yogurt', 2.00, 15, '2025-06-28');

console.log(product1.toString());
console.log(product2.toString());
console.log(perishableProduct1.toString()); 
console.log(perishableProduct2.toString());
