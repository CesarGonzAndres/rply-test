const express = require("express");
const router = express.Router();
const request = require("request");

router.get("/product_search/", async (req, res) => {
    request(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.search}`, function (error, response) {
        res.json({response});
    });
});

router.get("/product/", async (req, res) => {
    request(`https://api.mercadolibre.com/items/${req.query.id}`, function (error, response) {
        res.json({response});
    });
});

router.get("/product/description", async (req, res) => {
    request(`https://api.mercadolibre.com/items/${req.query.id}/description`, function (error, response) {
        res.json({response});
    });
});

module.exports = router;