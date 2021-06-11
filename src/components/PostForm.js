import React from 'react';
import { Formik, Form } from 'formik';
import { TextField, SelectField, TextareaField } from './formField';
import * as Yup from 'yup';
import { defaultImageForNoPic } from '../config';

const PostForm = ({ save, cancel, title, post = {} }) => {

  const initialFormData = {
    itemName: post.itemName || "",
    city: post.city || "",
    imgUrl: post.imgUrl || "",
    description: post.description || "",
    category: post.category || "",
    ageGroup: post.ageGroup || ""
  }

  const validate = Yup.object({
    itemName: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Required'),
    imgUrl: Yup.string().url(),
    city: Yup.string()
      .required('City is Required'),
    category: Yup.string()
      .required('Category is required'),
    ageGroup: Yup.string()
      .required('Age group is required'),
    description: Yup.string().nullable()
      .max(250, 'Must be 250 characters or less')
  })

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <Formik
            initialValues={initialFormData}
            validationSchema={validate}
            onSubmit={values => {
              if (values.imgUrl === "") {
                values.imgUrl = defaultImageForNoPic;
              }
              save(values);
            }}
          >
            {({ handleSubmit, handleChange, values }) => (
              <div>
                <h1 className="my-5 font-weight-bold">{title}</h1>
                <Form onSubmit={handleSubmit}>
                  <TextField label="Item Name" name="itemName" type="text" value={values.itemName} onChange={handleChange} />

                  <TextField label="Image URL" name="imgUrl" type="text" value={values.imgUrl} onChange={handleChange} placeholder="(Optional)" />

                  <SelectField label="Category" name="category" type="select" value={values.category} onChange={handleChange} options={[
                    { value: 'toy', label: 'Toy' },
                    { value: 'book', label: 'Book' },
                    { value: 'stationery', label: 'Stationery' },
                    { value: 'tool', label: 'Tool' },
                    { value: 'game', label: 'Game' },
                    { value: 'sport', label: 'Sport' },
                    { value: 'other', label: 'Other' }
                  ]} />

                  <SelectField label="Age Group" name="ageGroup" type="select" value={values.ageGroup} onChange={handleChange} options={[
                    { value: 'all ages', label: 'All ages' },
                    { value: 'baby', label: 'Baby' },
                    { value: 'kid', label: 'Kid' },
                    { value: 'youth', label: 'Youth' },
                    { value: 'adult', label: 'Adult' }
                  ]} />

                  <TextField label="Location/City" name="city" type="text" value={values.city} onChange={handleChange} />

                  <TextareaField label="Description" name="description" type="textarea" value={values.description} onChange={handleChange} placeholder="(Optional) Please no more than 250 characters ..." />

                  <button className="btn btn-dark mt-3" type="submit">Save</button>
                  <button className="btn btn-danger mt-3 ml-3" onClick={cancel}>Cancel</button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}



export default PostForm;


