'use strict';

var constants = require('../helpers/constants.js');

module.exports = {
	getAccounts: {
		id: 'multisignatures.getAccounts',
		type: 'object',
		properties: {
			publicKey: {
				type: 'string',
				format: 'publicKey'
			}
		},
		required: ['publicKey']
	},
	pending: {
		id: 'multisignatures.pending',
		type: 'object',
		properties: {
			publicKey: {
				type: 'string',
				format: 'publicKey'
			}
		},
		required: ['publicKey']
	}
};
