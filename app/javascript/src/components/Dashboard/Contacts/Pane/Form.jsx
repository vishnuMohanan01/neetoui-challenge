import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, DUMMY_ROLES } from "../constants";
import { fakeContactApi } from "../utils";

const ContactForm = ({ onClose, refetch, contact, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [roles, setRoles] = useState([]);

  const handleSubmit = async values => {
    try {
      // TODO: implement Edit feature
      if (isEdit) {
        // TODO: replace with update API request, once implemented
        fakeContactApi.update(contact.id, values);
      } else {
        // TODO: replace with create API request, once implemented
        fakeContactApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  const fetchRoles = () => {
    // TODO: This should be replaced with API call, once implemented
    setRoles(DUMMY_ROLES);
  };

  useEffect(() => {
    fetchRoles();
  });

  return (
    <Formik
      initialValues={contact}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full space-x-2">
              <Input
                className="w-full flex-grow-0"
                label="First Name"
                name="first_name"
                placeholder="Enter first name"
                size="large"
              />
              <Input
                className="w-full flex-grow-0"
                label="Last Name"
                name="last_name"
                placeholder="Enter last name"
                size="large"
              />
            </div>
            <Input
              className="w-full flex-grow-0"
              label="Email Address"
              name="email"
              placeholder="Enter your email address"
              type="email"
            />
            <Select
              className="w-full flex-grow-0"
              label="Role"
              name="role"
              options={roles}
              placeholder="Select Role"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3 flex-row gap-x-6"
              disabled={isSubmitting}
              icon={() => <Check />}
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              className="text-gray-500"
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
