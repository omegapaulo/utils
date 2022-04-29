class ApiError {
  constructor(message, statusCode) {
    this.message = message;
    this.statusCode = statusCode;
  }

  static badRequest(msg) {
    return new ApiError(msg, 400);
  }

  static unauthorized(msg) {
    return new ApiError(msg, 401);
  }

  static forbidden(msg) {
    return new ApiError(msg, 403);
  }

  static notFound(msg) {
    return new ApiError(msg, 404);
  }

  static conflict(msg) {
    return new ApiError(msg, 409);
  }

  static internalServerError(msg) {
    return new ApiError(msg, 500);
  }

  static notImplemented(msg) {
    return new ApiError(msg, 501);
  }

  static serviceUnavailable(msg) {
    return new ApiError(msg, 503);
  }

  static gatewayTimeout(msg) {
    return new ApiError(msg, 504);
  }

  static badGateway(msg) {
    return new ApiError(msg, 502);
  }
}

export default ApiError;
