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
        return `Order ID: ${this.orderID}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}.`
    }


}

//Creating a new order using the constructor.
const order1 = new Order(501, prod1, 2)

//Logging the order details.
console.log(order1.getOrderDetails())

//Logging the product details after the order was created.
console.log(prod1.getDetails())

//Task 3 - Creating an Inventory Class

//Creating a new class called inventory that can call upon products and place them into an array.
class Inventory {
    constructor () {
        this.products = [] //Creates the empty array to place products into.
        this.orders = [] //Part of Task 4 - crates an empty array to place orders into.
    }
    addProduct(product){
        this.products.push(product) //Adds products to the array.
    }
    listProducts(){
        return this.products.forEach(prod => console.log(prod.getDetails())) //Lists the details of all products in the array.
    }

    //Part of Task 4 - Creates a new function that places an order if the specified quantity is greater than or equal to the current stock.
    placeOrder(orderID, product, quantity) {
        if (product.stock >= quantity) {
        const newOrder = new Order(orderID, product, quantity)
        this.orders.push(newOrder)
        
        }
    }
    //Part of Task 4 - Creating a new function that console logs each order's details in the order array.
    listOrders(){
        this.orders.forEach(order => console.log(order.getOrderDetails()))
    }
}

//Creating a new inventory using the constructor.
const inventory = new Inventory()

//Adding the product we created to the array of products.
inventory.addProduct(prod1)

//Returns the details of the products in the updated array.
inventory.listProducts()

//Task 4 - Implementing Order Management

//Creating a new order  using placeOrder.
inventory.placeOrder(601, prod1, 2)

//Logging the updated order array.
inventory.listOrders()

//Logging the updated product array and its details.
console.log(prod1.getDetails())