export const isRequired =
  (errorMsg = "Required") =>
  value =>
    value && value !== "" ? undefined : errorMsg;
