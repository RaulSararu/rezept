import { Rezept } from "../models/Rezept.js";

export const getRezept = async (req, res) => {
    try {
        const items = await Rezept.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRezept = async (req, res) => {
    const item = req.body;
    const newItem = new Rezept(item);
    try {
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}

export const getRezeptById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Rezept.findById(id);
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateRezept = async (req, res) => {
    const { id } = req.params;
    const item = req.body;
    try {
        const updatedItem = await Rezept.findByIdAndUpdate(id, item, { new: true });
        res.status(200).json(updatedItem);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteRezept = async (req, res) => {
    const { id } = req.params;
    try {
        await Rezept.findByIdAndDelete(id);
        res.json({ message: 'Item deleted successfully' });
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}