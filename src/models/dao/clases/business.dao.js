import businessModel from "../../business.model.js";

export default class Business {

    getBusiness = async () => {
        try {
            return await businessModel.find();
        } catch (error) {
            console.error("Error al obtener los negocios", error);
            throw error;
        }
    }

    getBusinessById = async (id) => {
        try {
            return await businessModel.findById(id);
        } catch (error) {
            console.error("Error al obtener el negocio", error);
            throw error;
        }
    };

    saveBusiness = async (business) => {
        try {
            const newBusiness = new businessModel(business);
            return await newBusiness.save();
        } catch (error) {
            console.error("Error al crear el negocio", error);
            throw error;
        }
    };

    
    addProduct = async (id, product) => {
        try {
            return await businessModel.findByIdAndUpdate(id, { $push: { products: product } }, { new: true });

        } catch (error) {
            console.error("Error al agregar el producto", error);
            throw error;
        }
    };

    updateBusiness = async (id, business) => {
        try {
            return await businessModel.findByIdAndUpdate(id, business, { new: true });
        } catch (error) {
            console.error("Error al actualizar el negocio", error);
            throw error;
        }
    };
}