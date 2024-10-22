import { eachUserDataType } from "../type/type";

export const validate = (values: eachUserDataType) => {
    const errors: {
      name?: string;
      email?: string;
      gender?: string;
    } = {};

    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "invalid email format";
    }
    if (!values.gender) {
      errors.gender = "Gender is required";
    }
    if (values.gender !== "male" && values.gender !== "female") {
      errors.gender = "Invalid gender";
    }
    return errors;
  };

