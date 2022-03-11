express = require("express"),
router = express.Router();

// Contact Model
let contactSchema = require("../models/contacts");

// CREATE contact
router.post("/create-contact", (req, res, next) => {
contactSchema.create(req.body, (error, data) => {
	if (error) {
	return next(error);
	} else {
	console.log(data);
	res.json(data);
	}
});
});

// READ Contacts
router.get("/", (req, res) => {
contactSchema.find((error, data) => {
	if (error) {
	return next(error);
	} else {
	res.json(data);
	}
});
});

// UPDATE Contacts
router
.route("/update-contact/:id")
// Get Single Contact
.get((req, res) => {
	contactSchema.findById(
		req.params.id, (error, data) => {
	if (error) {
		return next(error);
	} else {
		res.json(data);
	}
	});
})

// Update Contact Data
.put((req, res, next) => {
	contactSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
         console.log(error);   
		return next(error);
		
		} else {
		res.json(data);
		console.log("Contact updated successfully !");
		}
	}
	);
});

// Delete Contact
router.delete("/delete-contact/:id",
(req, res, next) => {
contactSchema.findByIdAndRemove(
	req.params.id, (error, data) => {
	if (error) {
	return next(error);
	} else {
	res.status(200).json({
		msg: data,
	});
	}
});
});

module.exports = router;
