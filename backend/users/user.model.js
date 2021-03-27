const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
	const attributes = {
		first_name: { type: DataTypes.STRING, allowNull: false },
		last_name: { type: DataTypes.STRING, allowNull: false },
		username: { type: DataTypes.STRING, allowNull: false },
		password: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false },
	};

	const options = {
		defaultScope: {
			// exclude password by default
			attributes: { exclude: ['password'] },
		},
		scopes: {
			// include hash with this scope
			withHash: { attributes: {} },
		},
		underscored: true,
	};

	return (User = sequelize.define('User', attributes, options));
}
