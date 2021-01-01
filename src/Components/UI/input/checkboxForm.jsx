import React from "react";
import { Form } from 'react-bootstrap'

/**
 * @author
 * @function form
 **/

const checkbox = (props) => {
  return (
    <Form>
        <div key={props.type} className="mb-6">
          <Form.Check type={props.type}>
            <Form.Check.Input type={props.type} isValid />
            <Form.Check.Label>{props.label}</Form.Check.Label>
          </Form.Check>
        </div>
    </Form>
  );
};

export default checkbox;
