import userModel from "../models/users.model.js";
import { getUsers , getUsersById , saveUser} from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", saveUser);

router.get("/", getUsers);

router.get("/:id", getUsersById);

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, nacionalidad } = req.body;

    try {
        const user = await userModel.findByIdAndUpdate(id, { name, email, nacionalidad }, { new: true });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }   
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;

/* 

POST http://localhost:3000/users para crear un nuevo usuario.
GET http://localhost:3000/users para obtener todos los usuarios.
GET http://localhost:3000/users/:id para obtener un usuario por ID.
PUT http://localhost:3000/users/:id para actualizar un usuario por ID.
DELETE http://localhost:3000/users/:id para eliminar un usuario por ID. */