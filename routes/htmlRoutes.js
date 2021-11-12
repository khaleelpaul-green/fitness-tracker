const path = require("path");
// const app = require('express');
const router = require("express").Router();

const htmlRoutes = function(){
    router.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    router.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    router.get("/stats", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"))
    });
}
htmlRoutes();

module.exports = router;