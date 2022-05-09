var express = require("express");
var router = express.Router();

const messages = [
	{
		text: "Hello!",
		user: "jame",
		date: new Date(),
	},
	{
		text: "2nd message from me ;-)",
		user: "jame",
		date: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
	const newMessage = {
		text: req.body.text,
		user: req.body.user,
		date: new Date(),
	};
	messages.unshift(newMessage);
	res.redirect("/");
});

module.exports = router;
