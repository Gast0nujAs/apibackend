import { orderDao } from "../config/config.js";

let orderService = new orderDao();

const getOrders = async (req, res) => {
    const result = await orderService.getOrders();
    res.json(result);
};

const getOrderById = async (req, res) => {
    const { id } = req.params;

    const order = await orderService.getOrderById(id);

    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);

};

const createOrder = async (req, res) => {
    const {user , products , business} = req.body;
    let userFound = await userService.getUserById(user);
    let businessFound = await businessService.getBusinessById(business);
    let actualOrders = businessFound.products.filter(product => product.includes(product.id));

    let sum = actualOrders.reduce((acc , product) => {
        return acc + product.totalPrice;
    }, 0);

    let orderNumber = Date.now() + Math.floor(Math.random() * 1000);
    let newOrder = {
        number: orderNumber,
        business,
        userFound,
        products: actualOrders.map((product) => product.id),
        totalPrice: sum,
    };
    let result = await orderService.createOrder(newOrder);
    if (!result) {
        return res.status(404).json({ message: "Order not found" });

    }else {
        return res.status(201).json(result);
    };

};

const resolveOrder = async (req, res) => {
    const { id } = req.params;
    const newOrder = req.body;
    const order = await orderService.resolveOrder(id, newOrder);
    if (!order) {
        return res.status(404).json({ message: "Order not found" });
    }

    res.status(201).json(order);
};

export { getOrders, getOrderById, createOrder, resolveOrder };