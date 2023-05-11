import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import "../style/form.css";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  //   const mergedDispatch = useDispatch();
  //   const { userDataList } = useSelector((response) => {
  //     console.log(response.userDataState);
  //     return response.userDataState;
  //   });

  function addUser() {
    console.log("for store");
  }
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
        id: "",
        gender: "",
        acc: "",
      }}
      validationSchema={yup.object({
        firstName: yup.string("شامل عدد نباشد").required("پر نمودن این بخش الزامیست!"),
        lastName: yup.string("شامل عدد نباشد").required("پر نمودن این بخش الزامیست!"),
        email: yup
          .string("شامل عدد نباشد")
          .email("فرمت ادرس الکترونیک را رعایت کنید")
          .required("پر نمودن این بخش الزامیست!"),
        city: yup.string("شامل عدد نباشد").required("پر نمودن این بخش الزامیست!"),
        phoneNumber: yup
          .number("باید عدد باشد")
          .positive("باید مثبت باشد")
          .integer("اعشاری نباشد")
          .required("پر نمودن این بخش الزامیست!"),
        id: yup
          .number("باید عدد باشد")
          .positive("مثبت باشد")
          .integer("اعشاری نباشد")
          .required("پر نمودن این بخش الزامیست!"),
        gender: yup.string("شامل عدد نباشد").required("پر نمودن این بخش الزامیست!"),
        acc: yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className="container" id="con-1" onSubmit={handleSubmit}>
          {/* row-1 */}
          <div className="row mt-5">
            <div className="col g-2 p-3 mt-5">
              {/* 1 */}
              <div>
                <label className="form-label text-light pe-2">نام :</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  placeholder="نام خود را وارد نمایید"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName ? (
                <span className="text-danger">{errors.firstName}</span>
              ) : null}
            </div>
            <div className="col g-2 p-3 mt-5">
              {/* 2 */}
              <div>
                <label
                  className="form-label text-light pe-2 "
                  placeholder="write here ..."
                >
                  نام خانوادگی :
                </label>
                <input
                  type="text"
                  className="form-control "
                  name="lastName"
                  placeholder="نام خانوادگی خود را وارد نمایید"
                  value={values.lastName}
                  onChange={handleChange}
                />
                {errors.lastName ? (
                  <span className="text-danger">{errors.lastName}</span>
                ) : null}
              </div>
            </div>
          </div>
          {/* row-2 */}
          <div className="row  mt-3 ">
            <div className="col g-2 p-3">
              {/* 3 */}
              <div>
                <label className="form-label text-light pe-2 ">
                  آدرس الکترونیک :
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="name@example.com"
                  value={values.email}
                  onChange={handleChange}
                />
                {/* <div id="emailHelp" className="form-text">هرگز ادرس  الکترونیک خود را با کسی در میان نگذارید !</div> */}
                {errors.email ? (
                  <span className="text-danger">{errors.email}</span>
                ) : null}
              </div>
            </div>
            <div className="col g-2 p-3 ">
              {/* 4 */}
              <div>
                <label className="form-label text-light pe-2 ">نام شهر :</label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  placeholder="شهر خود را وارد نمایید"
                  value={values.city}
                  onChange={handleChange}
                />
                {errors.city ? (
                  <span className="text-danger">{errors.city}</span>
                ) : null}
              </div>
            </div>
          </div>
          {/* row-3 */}
          <div className="row mt-3 ">
            <div className="col g-2 p-3">
              <div>
                <label className="form-label text-light pe-2 ">
                  شماره همراه :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  placeholder="شماره همراه خود را وارد نمایید"
                  value={values.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber ? (
                  <span className="text-danger">{errors.phoneNumber}</span>
                ) : null}
              </div>
            </div>
            <div className="col g-2 p-3">
              {/* 5 */}
              <div>
                <label className="form-label text-light pe-2 ">کد ملی :</label>
                <input
                  type="text"
                  className="form-control"
                  name="id"
                  placeholder="کد ملی خود را وارد نمایید"
                  value={values.id}
                  onChange={handleChange}
                />
                {errors.id ? (
                  <span className="text-danger">{errors.id}</span>
                ) : null}
              </div>
            </div>
          </div>
          {/* row-4 */}
          <div className="row ">
            <div className="col g-2 p-3">
              {/* 6 */}
              <div>
                <label className="form-label text-light pe-2 ">جنسیت :</label>
                <select
                  className="form-select form-select"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                >
                  <option defaultValue="select">
                    جنسیت خود را انتخاب کنید
                  </option>
                  <option value="1">مذکر</option>
                  <option value="2">مونث</option>
                </select>
                {errors.gender ? (
                  <span className="text-danger">{errors.gender}</span>
                ) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col g-2 p-3 ">
              <div className="form-check form-switch">
                <label className="form-label text-light ">قبول قوانین</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  name="acc"
                  value={values.acc}
                  onChange={handleChange}
                />
                {errors.acc ? (
                  <span className="text-danger">{errors.acc}</span>
                ) : null}
              </div>
            </div>
            <div className="col-8">
              <ReCAPTCHA
                className="g-recaptcha"
                id="s"
                sitekey="6LdfmJchAAAAAFVAocKYhOk55zygImUDrh6ooC13"
                onChange={onChange}
              ></ReCAPTCHA>
            </div>
          </div>
          <div className="row">
            <div className="col mb-5">
              <input
                type="submit"
                className="col-12 p-2 btn btn-light border  mt-4"
                name="submit"
                value="تایید"
                id="but-1"
                onClick={addUser()}
              />
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};
export default Form;
