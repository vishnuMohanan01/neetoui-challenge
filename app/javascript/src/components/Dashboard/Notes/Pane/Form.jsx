import React, { useEffect, useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import {
  NOTES_FORM_VALIDATION_SCHEMA,
  DUMMY_CONTACTS,
  DUMMY_TAGS,
} from "../constants";

const NoteForm = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [tags, setTags] = useState([]);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  const fetchContacts = () => {
    // TODO: This should be replaced with API call, once implemented
    setContacts(DUMMY_CONTACTS);
  };

  const fetchTags = () => {
    // TODO: This should be replaced with API call, once implemented
    setTags(DUMMY_TAGS);
  };

  useEffect(() => {
    fetchContacts();
    fetchTags();
  });

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter title"
            />
            <Textarea
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
            />
            <Select
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assigned_contact"
              options={contacts}
              placeholder="Select Role"
            />
            <Select
              isMulti
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={tags}
              placeholder="Select Tag"
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
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
