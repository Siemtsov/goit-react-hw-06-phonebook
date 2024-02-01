import { getVisibleContacts } from './Redux/selectors';
import { useSelector } from 'react-redux';

import { Container, Wrapper, Title, SubTitle } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


const App = () => {
  const contacts = useSelector(getVisibleContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Wrapper>Your phonebook is empty, add your first contact!</Wrapper>
      )}
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};

export default App;
