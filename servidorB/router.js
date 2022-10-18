const express = require("express");
const router = express.Router();
const produto = require("./api/produto/produto.controller");

router.use(express.json());
router.use('/', produto);

module.exports = router;