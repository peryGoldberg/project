import  express from "express";
import * as  productController from "../controllers/product.js";
import { authAdmin } from "../middlewares/auth.js";
const router = express.Router();

router.get("/",productController.getAllProducts);

router.get("/:id",productController.getProductById);

router.post("/",authAdmin,productController.addProduct);

router.delete("/:id",authAdmin,productController.deleteProductById);

router.put("/:id",authAdmin,productController.updateProductById);

export default router;