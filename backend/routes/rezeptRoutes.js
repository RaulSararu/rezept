import express from 'express';
import { createRezept, deleteRezept, getRezept, getRezeptById, updateRezept } from '../controllers/rezeptController.js';

const router = express.Router();

router.route("/").get(getRezept).post(createRezept);
router.route("/:id").get(getRezeptById).delete(deleteRezept).patch(updateRezept);

export default router;