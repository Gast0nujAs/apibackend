import userModel from "../models/users.model.js";
import { userDao } from "../config/config.js";

const userService = new userDao();

const getUsers =  async ( req, res) => {
    const user = await userService.getUsers();
    res.json(user)
};     

const getUsersById = async (req, res) => {
    const { id } = req.params;

    const user = await userService.getUserById(id);
    if (!user) return res.status(404).send('Usuario no encontrado');

    res.json(user);
    

};

const saveUser = async (req, res) => {
    const { name, email, nacionalidad } = req.body;
    const user = await userService.saveUser({ name, email, nacionalidad });
    res.status(201).json(user);
};

export  { getUsers , getUsersById, saveUser };