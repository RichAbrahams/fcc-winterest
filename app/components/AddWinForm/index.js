/**
*
* AddWinForm
*
*/
/* eslint import/no-mutable-exports:0  jsx-a11y/img-has-alt:0*/

import React from 'react';
import { connect } from 'react-redux';
import ErrorSpan from 'components/ErrorSpan';
import FormFieldWrapper from 'components/FormFieldWrapper';
import FormWrapper from 'components/FormWrapper';
import FormTitle from 'components/FormTitle';
import FormTextInput from 'components/FormTextInput';
import FormButton from 'components/FormButton';
import FormLabel from 'components/FormLabel';
import FormCloseWrapper from 'components/FormCloseWrapper';
import FormCloseIcon from 'components/FormCloseIcon';
import Input from './styles';

import { Field, reduxForm, formValueSelector } from 'redux-form/immutable';

const validate = (values) => {
  console.log('values', values.toJS());
  const errors = {};
  if (!values.get('imgLink')) {
    errors.imgLink = 'Required';
  }
  if (!values.get('title')) {
    errors.title = 'Required';
  }
  return errors;
};
const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <FormFieldWrapper>
    <FormLabel>{label}</FormLabel>
    <div>
      <Input {...input} placeholder={label} type={type} />
      {touched && ((error && <ErrorSpan>{error}</ErrorSpan>))}
    </div>
  </FormFieldWrapper>
);

let AddWinForm = (props) => {
  const { handleSubmit, submitting, hasImageValue, toggleAddWin } = props;
  return (
    <FormWrapper>
      <FormCloseWrapper>
        <FormCloseIcon
          name="times-circle"
          size="2x"
          color="white"
          transform="translate(20px,-20px);"
          toggleAddWin={toggleAddWin}
        />
      </FormCloseWrapper>
      <FormTitle>Add a new win</FormTitle>
      <form onSubmit={handleSubmit}>
        {hasImageValue && <img src={hasImageValue} />}
        <Field name="title" type="text" component={renderField} label="Title" imageLinkError />
        <Field name="imgLink" type="text" component={renderField} label="Image Link" />
        <div>
          <FormButton type="submit" disabled={submitting}>Submit</FormButton>
        </div>
      </form>
    </FormWrapper>
  );
};

renderField.propTypes = {
  input: React.PropTypes.object,
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  meta: React.PropTypes.object,
};

AddWinForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,
  hasImageValue: React.PropTypes.string,
  toggleAddWin: React.PropTypes.func.isRequired,
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
