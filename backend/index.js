const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const { log } = require("console");

app.use(express.json());
app.use(cors());

mongoose.connect(`${process.env.DB_URL}`);

// APIs

app.get("/", (req, res) => {
    res.send("Express app");
});

app.listen(port, (err) => {
    if (!err) {
        console.log("Server running on port: " + port);
    } else {
        console.log("Error: " + err);
    }
});

const storage = multer.diskStorage({
    destination: "./uploads/images",
    filename: (req, file, cb) => {
        return cb(
            null,
            `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`
        );
    },
});

const upload = multer({ storage });

app.use("/images", express.static("./uploads/images"));
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`,
    });
});

const Product = mongoose.model("product", {
    id: {
        type: Number,
        required: true,
    },
    name: { type: String, required: true },
    image: { type: String, requited: true },
    category: { type: String, required: true },
    new_price: { type: Number, required: true },
    old_price: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    available: { type: Boolean, default: true },
});

app.post("/add-product", async (req, res, next) => {
    let products = await Product.find({});
    let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const product = new Product({
        id,
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved to db");
    res.json({
        success: true,
        name: req.body.name,
    });
});

app.post("/remove-product", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed");
    res.json({
        success: true,
        id: req.body.id,
    });
});

app.get("/products", async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

const User = mongoose.model("User", {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    cartData: { type: Object },
    date: { type: Date, default: Date.now() },
});

app.post("/signup", async (req, res) => {
    let check = await User.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({
            success: false,
            error: "User exists with the email address",
        });
    }

    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new User({
        name: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    });

    await user.save();

    const data = {
        user: {
            id: user.id,
        },
    };

    const token = jwt.sign(data, "secret_token");
    res.json({
        success: true,
        token,
    });
});

app.post("/login", async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id,
                },
            };

            const token = jwt.sign(data, "secret_token");
            res.json({
                success: true,
                token,
            });
        } else {
            res.json({
                success: false,
                error: "Incorrect password",
            });
        }
    }
});
