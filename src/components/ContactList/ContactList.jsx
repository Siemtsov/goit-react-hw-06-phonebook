import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'components/Redux/selectors';
import { removeContact } from 'components/Redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeContact());
  };

  return (
    <List>
      {contacts.map((contact, index) => (
        <Item key={index}>
          {contact.name + ' : ' + contact.number}
          <Button
            type="button"
            name="delete"
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
