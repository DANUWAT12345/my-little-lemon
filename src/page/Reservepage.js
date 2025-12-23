import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
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
      guests: '1',
      occasion: 'none',
      specialNote: '',
    },
    validationSchema: schema,
    onSubmit,
  })

  return (
    <Container className="py-5">
      {/* Header Section */}
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-start mb-3">Reserve a Table</h1>
          <p className="lead text-start text-muted">
            We need some important information before we proceed.
          </p>
        </Col>
      </Row>

      {/* Form Section */}
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            
            {/* Personal Information Card */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-4 text-start">Personal Information</h4>
                
                <Row>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="firstname"
                      label="First Name"
                      className="mb-3"
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
                        <Form.Control.Feedback type="invalid">
                          {errors.firstname}
                        </Form.Control.Feedback>
                      )}
                    </FloatingLabel>
                  </Col>
                  
                  <Col md={6}>
                    <FloatingLabel
                      controlId="lastname"
                      label="Last Name"
                      className="mb-3"
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
                        <Form.Control.Feedback type="invalid">
                          {errors.lastname}
                        </Form.Control.Feedback>
                      )}
                    </FloatingLabel>
                  </Col>
                </Row>

                <FloatingLabel
                  controlId="email"
                  label="Email Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    isValid={!errors.email && touched.email}
                    isInvalid={errors.email && touched.email}
                  />
                  {errors.email && touched.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  )}
                </FloatingLabel>
              </Card.Body>
            </Card>

            {/* Date and Time Card */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="mb-3 text-start">Pick a Date and Time</h4>
                <p className="text-muted text-start mb-4 small">Need special reserve time? Please contact us</p>
                
                <Row>
                  <Col md={6} className="mb-3 mb-md-0">
                    <Form.Label className="text-start d-block fw-semibold mb-2">Select Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="date"
                      onChange={handleChange}
                      value={values.date}
                      style={{padding: '12px'}}
                    />
                  </Col>
                  
                  <Col md={6}>
                    <Form.Label className="text-start d-block fw-semibold mb-2">Select Time</Form.Label>
                    <Form.Select
                      name="time"
                      onChange={handleChange}
                      value={values.time}
                      style={{padding: '12px'}}
                    >
                      <option value="">Choose a time...</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                    </Form.Select>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Guest Details Card */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Row>
                  <Col md={6} className="mb-3 mb-md-0">
                    <Form.Label className="text-start d-block fw-semibold mb-3">Number of Guests</Form.Label>
                    <Numberpicker />
                  </Col>
                  
                  <Col md={6}>
                    <Form.Label className="text-start d-block fw-semibold mb-3">Occasion</Form.Label>
                    <Occasionpicker />
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Special Note Card */}
            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body className="p-4">
                <Form.Label className="text-start d-block fw-semibold mb-2">Special Note (Optional)</Form.Label>
                <p className="text-muted text-start mb-3 small">
                  Don't hesitate if you need any special arrangement.
                </p>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Any special requests or dietary requirements?"
                  name="specialNote"
                  onChange={handleChange}
                  value={values.specialNote}
                />
              </Card.Body>
            </Card>

            {/* Submit Button */}
            <div className="text-center mt-4 mb-5">
              <Button 
                type="submit" 
                size="lg"
                style={{
                  backgroundColor: '#f4ce14', 
                  borderColor: '#f4ce14', 
                  color: '#000',
                  fontWeight: '600',
                  padding: '15px 50px',
                  fontSize: '1.1rem'
                }}
              >
                I am ready to reserve
              </Button>
            </div>

          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Reservepage;
