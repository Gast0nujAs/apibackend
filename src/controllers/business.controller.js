/* const getBusiness = () =>{};
const getBusinessById = () =>{};
const createBusiness = () =>{};
const addProduct = () =>{}; */
import { businessDao } from "../config/config.js";


let businessService = new businessDao();

const getBusiness = async (req, res) => {
    const result = await businessService.getBusiness();
    res.json(result);
};

const getBusinessById = async (req, res) => {
    const { id } = req.params;

    const business = await businessService.getBusinessById(id);

    if (!business) {
        return res.status(404).json({ message: "Business not found" });
    }

    res.json(business);
};

const createBusiness = async (req, res) => {
    const business = req.body;
    const result = await businessService.saveBusiness(business);
    res.json(result);
};

const addProduct = async (req, res) => {
    const { id } = req.params;
    const { product } = req.body;
    const business = businessService.addProduct(id, product);
    if (!business) { 
        return res.status(404).json({ message: "Business not found" });
    }
    businessService[business].products.push(product);
    res.json(business);
};

export { getBusiness, getBusinessById, createBusiness, addProduct };