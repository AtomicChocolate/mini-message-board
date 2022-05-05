var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hello!",
		user: "jame",
		added: new Date(),
	},
	{
		text: "2nd message from me ;-)",
		user: "jame",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

module.exports = router;
