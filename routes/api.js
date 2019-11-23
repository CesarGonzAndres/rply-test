const express = require("express");
const products = require("../config/products.json");
const router = express.Router();
const config = require("../config/default.json");
const request = require("request");
const redis = require("redis");
const client = redis.createClient();

router.get("/product", async (req, res) => {
    const url = "https://simple.ripley.cl/api/v2/products/"+req.query.productSKU;
    client.exists(req.query.productSKU, function (error, result) {
        if(result === 1) {
            client.get(req.query.productSKU, function (error, result) {
                return res.json({
                    success: true,
                    alreadyCached: true,
                    data: result
                });
            });
        } else {
            if (Math.random(0, 1) < 0.1) {
                let retry = setTimeout(() => {
                    request(url, function (error, response) {
                        if (response.body) {
                            clearTimeout(retry);
                            client.set(req.query.productSKU, response.body, "EX", 60, function() {
                                res.json({
                                    success: true,
                                    alreadyCached: false,
                                    data: response.body
                                });
                            });
                        }
                    });
                }, 1000);
            } else {
                request(url, function (error, response) {
                    if (response && response.body) {
                        client.set(req.query.productSKU, response.body, "EX", 60, function() {
                            res.json({
                                success: true,
                                alreadyCached: false,
                                data: response.body
                            });
                        });
                    }
                });
            }
        }
    });

});

router.get("/products_list", async (req, res) => {
    return res.json({
        products
    });
});

module.exports = router;