import { Router } from "express";
import ProductManager from "../dao/dbManagers/products.managers.js";
import MessagesManager from "../dao/dbManagers/messages.managers.js";

const router = Router()
const productManager = new ProductManager();
const messageManager = new MessagesManager()


router.get("/", async (req, res)=>{
    const productsList = await productManager.getAll()
    res.render("home", {products: productsList})
})


router.get("/realtimeproducts", async (req, res)=>{
    const productsList = await productManager.getAll()
    res.render("realtimeproducts", {products: productsList})
})

router.get("/chat", async(req, res) => {
    const messagesList = await messageManager.getAll()
    res.render("chat", {messages: messagesList, style: "chat.css"})
})


export default router