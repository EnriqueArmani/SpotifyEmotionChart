let express = require('express'),
    router = express.Router(),
    expressVue = require("express-vue");
    
module.exports = (router) => {
        router.get("/", (req, res) => {
            const data = {
                title: "Oh hi world!"
            };
            req.vueOptions.head.title = "Express-Vue";
    
            res.renderVue("main/main.vue", data, req.vueOptions);
        });
};
