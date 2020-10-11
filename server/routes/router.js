const express = require("express");
const router = express.Router();

const signUp = require("../controllers/userSignup.controller");
const { userLogIn } = require("../controllers/userLogin.controller");
const {
  addProduct,
  getProduct,
  listProduct,
  saleProduct,
  transaction,
  listTransactions,
  transactionStatus,
  productUpdate,
} = require("../controllers/product.controller");

const {
  UpdateFarmer,
  getAllFarmers,
} = require("../controllers/farmer.controller");

const {
  UpdateConsumer,
  getAllConsumers,
} = require("../controllers/consumer.controller");

const {
  addStorageTips,
  getStorageTips,
  updateStorage,
} = require("../controllers/productStorage.controller");
const sendMail = require("../controllers/contact.controller");

//Register user
router.post("/register", signUp);

//user login
router.post("/login", userLogIn);

//farmers routes
router.get("/farmers", getAllFarmers);
router.put("/farmer-edit", UpdateFarmer);

//consumers routes
router.get("/consumers", getAllConsumers);
router.put("/consumers-edit", UpdateConsumer);

//product routes
router.post("/product", addProduct);
router.post("/product-sale", saleProduct);
router.get("/products", getProduct);
router.get("/product-purchase", listProduct);

//transaction routes
router.post("/purchase", transaction);
router.get("/transactions", listTransactions);
router.put("/update", transactionStatus);
router.put("/update-product", productUpdate);

//Product storage tips
router.post("/add-tips", addStorageTips);
router.get("/storage-tips", getStorageTips);
router.put("/update-tips", updateStorage);

router.post("/contact", sendMail);

module.exports = router;
