import orderModel from "../../orders.model.js";

export default class Order {

    getOrders = async () => {
        return await orderModel.find();
    };

    getOrderById = async (id) => {
        try
        {
            return await orderModel.findById(id);
        }
        catch (error)
        {
            console.error("Error al obtener el pedido:", error);
            throw error;
        }
        
    };

    createOrder = async (order) => {
        try
        {
            return await orderModel.create(order);
        }
        catch (error)
        {
            console.error("Error al crear el pedido:", error);
            throw error;
        }
    };

    resolveOrder = async (id, order) => {
        try
        {
            return await orderModel.findByIdAndUpdate(id, order, { new: true });
        }
        catch (error)
        {
            console.error("Error al resolver el pedido:", error);
            throw error;
        };  

    };

}
