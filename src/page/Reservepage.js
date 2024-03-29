import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import React from 'react';
import * as formik from 'formik';
import * as yup from 'yup';
import { ErrorMessage } from 'formik';
import StaticDatePickerLandscape from '../Components/datepicker.js';


const { Formik } = formik;

const schema = yup.object().shape({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
});

function Reservepage() {
    return (
        <div className="container">
            <div className="text-start m-5">
                <div className="display-3">
                    Resereve the table ?
                </div>
                <div className="lead">
                    We need some importance infomation before we proceed.
                </div>
            </div>

            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstname: '',
                    lastname: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <div className='m-5'>
                            <div className='lead text-start mb-3'>Personal Infomation</div>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="First Name"
                                className="m-3"
                            >
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    onChange={handleChange}
                                    isValid={touched.firstname && !errors.firstname}
                                    isInvalid={touched.firstname && errors.firstname} />
                                {errors.firstname &&
                                    <div className='text-start'>
                                        <Form.Text className="text-danger">
                                            {errors.firstname}
                                        </Form.Text>
                                    </div>
                                }
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
                                    isValid={touched.lastname && !errors.lastname}
                                    isInvalid={touched.lastname && errors.lastname} />
                                {errors.lastname &&
                                    <div className='text-start'>
                                        <Form.Text className="text-danger">
                                            {errors.lastname}
                                        </Form.Text>
                                    </div>
                                }
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
                                    isValid={touched.email && !errors.email}
                                    isInvalid={touched.email && errors.email} />
                                {errors.email &&
                                    <div className='text-start'>
                                        <Form.Text className="text-danger">
                                            {errors.email}
                                        </Form.Text>
                                    </div>
                                }
                            </FloatingLabel>
                        </div>
                    </Form>
                )}
            </Formik>
            <div className="text-start m-5">
                <div className="lead">
                    Pick a date and time
                </div>
                <div className='m-3'>
                    <StaticDatePickerLandscape/>
                </div>
            </div>
        </div>
    );
}

export default Reservepage;
