import React from 'react';
import ContactCreds from '../Components/Contacts/ContactCredsSection/ContactCreds';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ContactShowcase from '../Components/Contacts/ContactCredsShowcase/ContactShowcase';
import ContactForm from '../Components/Contacts/ContactsForms/ContactForm';
import GMap from '../Components/Contacts/GMapSection/GMap';

const Contacts = () => {
  return (
    <>
      <Header />
      <ContactShowcase />
      <ContactCreds />
      <ContactForm />
      <GMap />
      <Footer />
    </>
  );
}

export default Contacts;