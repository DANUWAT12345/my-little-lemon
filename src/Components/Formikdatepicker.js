import React from 'react';
import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';

const FormikDatePicker = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  
  // Custom error styles (Bootstrap 5)
  const errorClass = meta.touched && meta.error ? 'is-invalid' : '';

  return (
    <div className="mb-3">
      <label htmlFor={props.id || props.name} className="form-label">
        {label}
      </label>
      <DatePicker
        {...field}
        {...props}
        selected={field.value}
        onChange={(date) => helpers.setValue(date)}
        className={`form-control ${errorClass}`}
      />
      {meta.touched && meta.error && (
        <div className="invalid-feedback">{meta.error}</div>
      )}
    </div>
  );
};

export default FormikDatePicker;
