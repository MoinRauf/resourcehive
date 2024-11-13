import axios from "axios";

const ErrorCode = {
  SUCCESS: 200,
  SERVER: 500,
  AUTHENTICATION: 419,
  BADREQUEST: 400,
  VALIDATION: 422,
};

const getValidationError = (error) => {
  if (error.response?.status === ErrorCode.VALIDATION) {
    const errorResponse = error.response;
    const errorData = errorResponse.data;
    const key = Object.keys(errorData.errors)[0];

    return {
      message: errorData.errors[key][0],
      status: "error",
      statusCode: ErrorCode.VALIDATION,
    };
  }

  return error.response?.data;
};

export function axiosErrorHandler(error) {
  if (axios.isAxiosError(error)) {
    return {
      error: getValidationError(error),
      type: "axios-error",
    };
  } else {
    return {
      error: error,
      type: "stock-error",
    };
  }
}
