module.exports = (err, req, res, next) => {
	const errorResponse = {};
	const status = err.isJoi ? 400 : err.httpStatus || 500;

	// Set error message
	if (errorResponse.message === undefined) {
		if (err.message) {
			errorResponse.message = err.message;
		} else {
			errorResponse.message = 'server error'; // Default error message
		}
	}

	// Set status code
	errorResponse.code = status;

	// Send JSON response
	res.status(status).json(errorResponse);
};
