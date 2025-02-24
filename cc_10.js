//Task 1 - Creating a Product Class

//Cerating a class called product that uses the contructor method.
class Product {
    constructor (name, id, price, stock) {
    this.name = name //Sources name in the instance.
    this.id = id //Sources ID in the instance.
    this.price = price //Sources price in the instnace.
    this.stock = stock //Sources stock in the instance.
    }

    //Creating a method that retreives the detials of a product using a template literal.
    getDetails(){
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}.`
    }

    //Creating a method that updates the stock when an order is placed given the quantity of a product ordered.
    updateStock(quantity){
        return this.stock -= quantity
    }
}

//Creating a new product using the constructor.
const prod1 = new Product("Laptop", 101, 1200, 10)

//Logging the new product's details.
console.log(prod1.getDetails())

//Updating the stock after having sold three items.
prod1.updateStock(3)

//Logging the updated details.
console.log(prod1.getDetails())