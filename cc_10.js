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

//Task 2 - Creating an Order Class

//Creating a class called order that can refrence the product class using the constructor.
class Order {
    constructor (orderID, product, quantity){

        this.orderID = orderID //Sources orderId in the instance.
        this.product = product //Allows for product to be called back to.
        this.quantity = quantity //Sources quantity in the instance.

        //Writing an if else statmenet to decrease the sotck of a product if an order is placed.
        if (this.product.stock >= quantity) {
            this.product.stock -= quantity
        } else {
            return "Out of Stock"
        }
    }

    //Writes a function that retreives the details of an order.
    getOrderDetails() {
        return `Order ID: ${this.orderID}, Product${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}.`
    }


}

//Creating a new order using the constructor.
const order1 = new Order(501, prod1, 2)

//Logging the order details.
console.log(order1.getOrderDetails())

//Logging the product details after the order was created.
console.log(prod1.getDetails())