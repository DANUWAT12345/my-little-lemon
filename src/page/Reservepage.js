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

const { Formik } = formik;

const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

function Reservepage() {
  return (
    <div className="container">
      <div className="text-start m-5">
        <div className="display-3">Resereve the table ?</div>
        <div className="lead">
          We need some importance infomation before we proceed.
        </div>
      </div>

      <Formik
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values));
          resetForm();
        }}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          startDate: null,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="m-5">
              <div className="lead text-start mb-3">Personal Infomation</div>
              <FloatingLabel
                controlId="floatingTextarea"
                label="First Name"
                className="m-3"
              >
                <Form.Control
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  value={values.firstname}
                  isValid={touched.firstname && !errors.firstname}
                  isInvalid={touched.firstname && errors.firstname}
                />
                {errors.firstname && (
                  <div className="text-start">
                    <Form.Text className="text-danger">
                      {errors.firstname}
                    </Form.Text>
                  </div>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Last Name"
                className="m-3"
              >
                <Form.Control
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={values.lastname}
                  isValid={touched.lastname && !errors.lastname}
                  isInvalid={touched.lastname && errors.lastname}
                />
                {errors.lastname && (
                  <div className="text-start">
                    <Form.Text className="text-danger">
                      {errors.lastname}
                    </Form.Text>
                  </div>
                )}
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Email"
                className="m-3"
              >
                <Form.Control
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && errors.email}
                />
                {errors.email && (
                  <div className="text-start">
                    <Form.Text className="text-danger">
                      {errors.email}
                    </Form.Text>
                  </div>
                )}
              </FloatingLabel>
              <div className="text-start m-3">
              <FormikDatePicker
                name="startDate"
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
                onChange={handleChange}
                value={values.startDate}
              />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <div className="text-start m-5">
        <div className="lead">Pick a Date and Time</div>
        <div className="m-3">
          <StaticDatePickerLandscape />
        </div>
        <div className="mt-5">
          <div className="lead">Number of Guests</div>
          <box class="d-flex justify-content-between align-items-center">
            <div className="m-3">
              <Numberpicker />
            </div>
            <div className="m-3">Person</div>
          </box>
          <div className="lead">Occasion</div>
          <box class="d-flex justify-content-between align-items-center">
            <div className="m-3">
              <Occasionpicker />
            </div>
            <div className="m-3">event</div>
          </box>
        </div>
        <div className="mt-5">
          <div className="lead">Special Note</div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Don't hesitage if you need any special arrangement.
            </label>
            <div className="m-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
          </div>
          <div className="m-3 mt-5">
            <button type="submit" class="btn btn-primary">
              I am Ready to reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservepage;
