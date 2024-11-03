const customError = require("../customError");

const errorHandler = (err, req, res, next) => {
  // Determine the error status
  const status = err instanceof customError ? err.status : 500;
  const message = err?.message || "An unexpected error occurred";

  // Send the error response
  res.status(status).json({
    success: false,
    message,
    status,
  });
};

module.exports = errorHandler;
