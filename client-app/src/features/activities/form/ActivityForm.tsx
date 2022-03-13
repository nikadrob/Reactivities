import React, { ChangeEvent, useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

const ActivityForm = ({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) => {
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: '',
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          value={activity.description}
          name="decription"
          onChange={handleInputChange}
          placeholder="Description"
        />
        <Form.Input
          value={activity.category}
          name="category"
          onChange={handleInputChange}
          placeholder="Category"
        />
        <Form.Input
          value={activity.date}
          name="date"
          onChange={handleInputChange}
          placeholder="Date"
        />
        <Form.Input
          value={activity.city}
          name="city"
          onChange={handleInputChange}
          placeholder="City"
        />
        <Form.Input
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
          placeholder="Venue"
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
