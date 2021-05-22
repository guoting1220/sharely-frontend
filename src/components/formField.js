import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-sm rounded ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select className={`form-control shadow-sm rounded ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off">
        <option value="">Please select one</option>
        {props.options.map(o =>
          <option key={o.value} value={o.value}>{o.label || o.value}</option>)}
      </select>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}

export const TextareaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`form-control shadow-sm rounded ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}







