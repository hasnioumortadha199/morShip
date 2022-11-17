export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.error.data.message
    : error.message;
};
