// 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

const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'shubhangihingu@gmail.com',
		pass: 'Shubhangi@1998'
	}
});

let mailDetails = {
	from: 'shubhangihingu@gmail.com',
	to: 'priyankag.mobio@gmail.com',
	subject: 'Test mail',
	text: 'Node.js mail '
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log('Error Occurs');
	} else {
		console.log('Email sent successfully');
	}
});
