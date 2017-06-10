const mongoose = require('mongoose'),
	passportLocalMongoose = require('passport-local-mongoose'),
	{Schema} = mongoose,
	Account = new Schema({
		username: {
			type: String,
			required: true,
			unique: true
		},
		password: String,
		gameSettings: {
			enableTimestamps: Boolean,
			enableRightSidebarInGame: Boolean,
			disablePlayerColorsInChat: Boolean,
			unbanTime: Date
		},
		verification: {
			email: String,
			verificationToken: String,
			verificationTokenExpiration: Date,
			passwordResetToken: String,
			passwordResetTokenExpiration: Date
		},
		karmaCount: Number,
		signupIP: String,
		lastConnectedIP: String,
		resetPassword: {
			resetToken: String,
			resetTokenExpiration: Date
		},
		verified: Boolean,
		games: Array,
		wins: Number,
		losses: Number,
		rainbowWins: Number,
		rainbowLosses: Number,
		lastVersionSeen: String,
		created: Date
	});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);