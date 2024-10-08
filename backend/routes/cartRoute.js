import { addToCart, removeFromCart, getCart} from "../controllers/cardController.js";
import authMiddleware from '../middleware/auth.js';
import express from 'express'

const cartRouter = express.Router();
cartRouter.post('/add', authMiddleware, addToCart);
cartRouter.post('/remove', authMiddleware, removeFromCart);
cartRouter.post('/get', authMiddleware, getCart);

export default cartRouter;