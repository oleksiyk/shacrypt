"use strict";

var shacrypt = require('./build/Release/shacrypt');
var crypto   = require('crypto');

var isString = function(obj) {
	return Object.prototype.toString.call(obj) == '[object String]';
};

var isNumber = function(obj) {
	return Object.prototype.toString.call(obj) == '[object Number]';
};

function validate(prefix, password, salt, rounds) {

	var _salt = salt,
		_rounds = rounds || 5000;

	if (!isString(password)) {
		throw new Error('password must be a String');
	}

	if (!isString(salt)) {
		_salt = crypto.randomBytes(16).toString('hex');

		if (isNumber(salt)) {
			_salt = prefix + 'rounds=' + salt + '$' + _salt;
		}
	}

	if (isNumber(_rounds) && _salt.indexOf(prefix) == -1) {
		_salt = prefix + 'rounds=' + _rounds + '$' + _salt;
	}

	return _salt;
}

/**
 * Generate SHA256-CRYPT hash
 *
 * @param  {String} password
 * @param  {String} [salt]
 * @param  {Number} [rounds]
 * @return {String}
 */
exports.sha256crypt = function(password, salt, rounds) {

	salt = validate('$5$', password, salt, rounds);

	return shacrypt.sha256crypt(password, salt);
};

/**
 * Generate SHA512-CRYPT hash
 *
 * @param  {String} password
 * @param  {String} [salt]
 * @param  {Number} [rounds]
 * @return {String}
 */
exports.sha512crypt = function(password, salt, rounds) {

	salt = validate('$6$', password, salt, rounds);

	return shacrypt.sha512crypt(password, salt);
};
