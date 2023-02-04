const express = require("express");
const router = express.Router();
console.log("Contacts section loaded");
const contactsController = require("../controllers/contactsController");
router.get("/contact", contactsController.contact);

module.exports = router;
