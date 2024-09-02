const errorMessage = {
  400: 'Bad request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  409: 'Conflict',
};

const httpError = (statusCode, message = errorMessage[statusCode]) => {
  const error = new Error(message);
  error.status = statusCode;
  return error;
};

module.exports = httpError;
