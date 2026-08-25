import { EventEmitter } from 'node:events';

class OrderSystem extends EventEmitter {
    placeOrder(order) {
        console.log(`order received : #${order.id} for ${order.customerName}`);
        console.log("Saving order to database...");
        this.emit("orderPlaced", order);
    }
}

const orderObj = new OrderSystem();

// sending email
orderObj.on("orderPlaced", (order) => {
    console.log(`Sending confirmation email to ${order.email}`);
});

// inventory service
orderObj.on("orderPlaced", (order) => {
    order.items.forEach((item) => {
        console.log(`Reducing stock for ${item.name} by ${item.quantity}`);
    });
});

// shipping service
orderObj.on("orderPlaced", (order) => {
    console.log(`Preparing shipment for order #${order.id}`);
});

// Logging
orderObj.on("orderPlaced", (order) => {
    console.log(`Order #${order.id} placed by ${order.customerName} has been logged.`);
});

// Error
orderObj.on("orderPlaced", (err) => {
    console.error(`Error occurred while placing order: ${err.message}`);
});

orderObj.placeOrder({
    id: "ORD1001",
    customerName: "Virat Kohli",
    email: "virat@cricket.com",
    items: [
        { name: "Cricket Bat", quantity: 1 },
        { name: "Cricket Ball", quantity: 6 }
    ],
    total: 250000
});