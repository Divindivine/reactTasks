import { EachUserDataType, ValidationErrorType } from "../type/type";

export const validate = (data: EachUserDataType) => {
  const errors: ValidationErrorType = {};

  if (!data.name) errors.name = "Name is required";

  if (!/^[A-Za-z\s]*$/.test(data.name))
    errors.name = "Name should only contain alphabets";

  if (!data.email) errors.email = "Email is required";

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
    errors.email = "Invalid email format";

  if (!data.gender) errors.gender = "gender is required";

  if (
    data.gender !== "male" &&
    data.gender !== "female" &&
    data.gender !== "other"
  )
    errors.gender = "gender should be male, female or other";

  return errors;
};
