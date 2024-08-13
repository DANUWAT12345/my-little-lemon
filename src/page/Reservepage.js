import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { ErrorMessage } from "formik";
import StaticDatePickerLandscape from "../Components/datepicker.js";
import Numberpicker from "../Components/Numberpicker.js";
import Occasionpicker from "../Components/Occasionpicker.js";
import FormikDatePicker from "../Components/Formikdatepicker.js";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";

const { Formik } = formik;

//Yup Schema for input verification
const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email address").required("Email is required"),
});


const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();
  const { times } = availableTimes;
};

//Start of Reservation page
function Reservepage() {

  const onSubmit = () => {
    console.log("submitted");
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      occasion: 'none',
    },
    validationSchema: schema,
    onSubmit,
  })

  return (

    //Header to inform customer
    <div className="container">
      <div className="text-start m-5">
        <div className="display-3">Resereve the table ?</div>
        <div className="lead">
          We need some importance infomation before we proceed.
        </div>
      </div>

      {/* Start of form*/}
        <Form noValidate onSubmit={handleSubmit}>
          <div className="m-5">
            <div className="lead text-start mb-3">Personal Infomation</div>

            {/* First Name*/}
            <FloatingLabel
              controlId="floatingTextarea"
              label="First Name"
              className="m-3"
            >
              <Form.Control
                type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstname}
                isValid={!errors.firstname && touched.firstname}
                isInvalid={errors.firstname && touched.firstname}
              />
              {errors.firstname && touched.firstname && (
                <div className="text-start">
                  <Form.Text className="text-danger">
                    {errors.firstname}
                  </Form.Text>
                </div>
              )}
            </FloatingLabel>

            {/* Last Name */}
            <FloatingLabel
              controlId="floatingTextarea"
              label="Last Name"
              className="m-3"
            >
              <Form.Control
                type="text"
                id="lastname"
                name="lastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastname}
                isValid={!errors.lastname && touched.lastname}
                isInvalid={errors.lastname && touched.lastname}
              />
              {errors.lastname && touched.lastname && (
                <div className="text-start">
                  <Form.Text className="text-danger">
                    {errors.lastname}
                  </Form.Text>
                </div>
              )}
            </FloatingLabel>


            {/* Email */}
            <FloatingLabel
              controlId="floatingTextarea"
              label="Email"
              className="m-3"
            >
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email ? "input-error" : ""}
                value={values.email}
                isValid={!errors.email && touched.email}
                isInvalid={errors.email && touched.email}
              />
              {errors.email && touched.email &&(
                <div className="text-start">
                  <Form.Text className="text-danger">
                    {errors.email}
                  </Form.Text>
                </div>
              )}
            </FloatingLabel>


            {/* Date And Time */}
            <div className="text-start">
              <div className="lead">Pick a Date and Time</div>
              <div className="m-3">
                <StaticDatePickerLandscape />
                <input
                type="date"
                name="date" />
              </div>
            </div>

            {/* Guests Number */}
            <div className="text-start">
              <div className="lead">Number of Guests</div>
              <box class="d-flex justify-content-between align-items-center">
                <div className="m-3">
                  <Numberpicker />
                </div>
                <div className="m-3">Person</div>
              </box>
            </div>


            {/* Occasion */}
            <div className="text-start">
              <div className="lead">Occasion</div>
              <box class="d-flex justify-content-between align-items-center">
                <div className="m-3">
                  <Occasionpicker />
                </div>
                <div className="m-3">event</div>
              </box>
            </div>

            {/* Special Note */}
            <div className="text-start">
              <div className="lead">Special Note</div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Don not hesitage if you need any special arrangement.
                </label>
                <div className="m-3">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Botton */}
          <div className="m-3 mt-5">
            <button type="submit" class="btn btn-primary">
              I am Ready to reserve
            </button>
          </div>

        </Form>
    </div>
  );
}

export default Reservepage;
