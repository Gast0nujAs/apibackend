import userModel from "../../users.model.js";


export default class User {
    getUsers = async () => {
        try {
            return await userModel.find();
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
        }

    };

    getUsersById = async (id) => {
        try {
            return await userModel.findById(id);
        } catch (error) {
            console.error("Error al obtener el usuario:", error);
        }
    };

    saveUser = async (user) => {
        try {
            const newUser = new userModel(user);
            return await newUser.save();

        } catch (error) {
            console.error("Error al crear el usuario:", error);
        }
    };

    updateUser = async (id, user) => {
        try {
            return await userModel.findByIdAndUpdate(id, user, { new: true });
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };

}
