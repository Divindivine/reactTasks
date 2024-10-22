import { ErrorMessage, Field, Form, Formik } from "formik";
import { formikFormPropType } from "../type/type";
import { validate } from "../utils/common";

function FormikForm({ initialValues, onSubmit }: formikFormPropType) {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col mt-[100px] gap-[40px]">
          <div className="flex gap-[10px]">
            <label>name</label>
            <Field className="border-[2px]" name="name" type="text" />
            <ErrorMessage name="name" />
          </div>
          <div className="flex gap-[10px]">
            <label>email</label>
            <Field className="border-[2px]" name="email" type="email" />
            <ErrorMessage name="email" />
          </div>
          <div className="flex gap-[10px]">
            <label>gender</label>
            <Field className="border-[2px]" name="gender" type="text" />
            <ErrorMessage name="gender" />
          </div>
          <div className="flex w-full justify-center">
            <button
              className="border-[2px] text-white w-[80px] h-[35px] bg-black rounded-[8px]"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default FormikForm;
