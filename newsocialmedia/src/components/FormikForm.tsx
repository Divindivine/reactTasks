import React from "react";
import { FormikFormPropType } from "../type/type";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validate } from "../utils/common";

function FormikForm({ initialValues, onSubmit }: FormikFormPropType) {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex flex-col">
          <div className="w-full flex flex-col gap-[5px] p-[10px]">
            <div className="flex gap-[30px]">
              <label className="font-semibold text-[25px] ">name</label>
              <Field
                className="border-[2px] border-black min-w-[300px]"
                name="name"
                type="text"
              />
            </div>
            <div className="min-w-[1px] h-[30px] text-[#D2122E] text-[20px]">
              <ErrorMessage name="name" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-[5px] p-[10px]">
            <div className="flex gap-[30px]">
              <label className="font-semibold text-[25px] ">email</label>
              <Field
                className="border-[2px] border-black min-w-[300px]"
                name="email"
                type="email"
              />
            </div>
            <div className="min-w-[1px] h-[30px] text-[#D2122E] text-[20px]">
              <ErrorMessage name="email" />
            </div>
          </div>

          <div className="w-full flex flex-col gap-[5px] p-[10px]">
            <div className="flex gap-[10px]">
              <label className="font-semibold text-[25px] ">gender</label>
              <Field
                className="border-[2px] border-black min-w-[100px]"
                name="gender"
                type="text"
              />
            </div>
            <div className="min-w-[1px] h-[30px] text-[#D2122E] text-[20px]">
              <ErrorMessage name="gender" />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <button
              className="bg-slate-500 text-white text-[25px] font-bold rounded-[8px] p-[10px] hover:bg-black mt-[100px]"
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
