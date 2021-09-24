import React from 'react';

function Contact(props) {
  const {
    id,
    name,
    lastName,
    group,
    phone,
    email,
  } = props;

  return (
    <div
      className="contact"
      id={id}
    >
      <p className="contact__data">Name: <span className="contact__name">{name}</span></p>
      <p className="contact__data">Last Name: <span className="contact__name">{lastName}</span></p>
      <p className="contact__data">Group: <span className="contact__name">{group}</span></p>
      <p className="contact__data">Phone: <span className="contact__name">{phone}</span></p>
      <p className="contact__data">Email: <span className="contact__name">{email}</span></p>
    </div>
  );
}

export default Contact;
