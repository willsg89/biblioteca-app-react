import React from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

function FormComponent(props) {
  const {
    id, label, value, onChange, placeholder, type, as, rows, children,
  } = props;
  return (
    <Form.Group controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        // disabled={isEdit ? 'disabled' : null}
        required={null}
        value={value}
        onChange={onChange}
        size="sm"
        as={as}
        type={type}
        placeholder={placeholder}
        rows={rows}
      >
        { children }
      </Form.Control>
    </Form.Group>
  );
}

FormComponent.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  as: PropTypes.string,
  rows: PropTypes.string,
  children: PropTypes.arrayOf,
};

FormComponent.defaultProps = {
  type: 'text',
  as: 'input',
  rows: '0',
  children: null,
};

export default FormComponent;
