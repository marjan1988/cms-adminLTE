const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	
	title		: String,
	body		: String,
	imagesUrls	: [String],
	coverImage	: String,
	link		: String,
	status		: { type: Boolean, default: false },
	author		: String,
	dateCreated	: { type: Date, default: Date.now },
	tage		: [String],
	
});

mongoose.model('Project', schema);