/**
*
* AddWinForm
*
*/

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';
import { Wrapper, TextInput, Button, Label } from './styles';

const stopProp = (e) => e.stopPropagation();

const asyncValidate = (values) => {
  const imageCheck = new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(false);
    img.onerror = () => resolve(true);
    img.src = values.get('imageLink');
  });
  return imageCheck.then((err) => {
    if (err) { throw { imageLink: 'image link is broken' };
    }
  });
};

const validate = (values) => {
  const errors = {};
  if (!values.get('imgLink')) {
    errors.imgLink = 'Required';
  }
  if (!values.get('title')) {
    errors.imgLink = 'Required';
  }
  return errors;
};
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <Label>{label}</Label>
    <div>
      <TextInput {...input} placeholder={label} type={type} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
let AddWinForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, hasImageValue } = props;
  return (
    <Wrapper onClick={(e) => stopProp(e)}>
      <h2>Add a new win</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        {hasImageValue && <img src={hasImageValue} />}
        <Field name="title" type="text" component={renderField} label="Title" imageLinkError />
        <Field name="imgLink" type="text" component={renderField} label="Image Link" />
        <div>
          <Button type="submit" disabled={submitting}>Submit</Button>
        </div>
      </form>
    </Wrapper>
  );
};

AddWinForm = reduxForm({
  form: 'AddWin',
  validate,
})(AddWinForm);

const selector = formValueSelector('AddWin');
AddWinForm = connect(
  (state) => {
    const hasImageValue = selector(state, 'imgLink');
    return {
      hasImageValue,
    };
  }
)(AddWinForm);

export default AddWinForm;
