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
      <p className="contact__name"><span className="contact__name">Name: </span>{name}</p>
      <p className="contact__last-name"><span className="contact__name">Last Name: </span>{lastName}</p>
      <p className="contact__last-name"><span className="contact__name">Group: </span>{group}</p>
      <p className="contact__last-name"><span className="contact__name">Phone: </span>{phone}</p>
      <p className="contact__last-name"><span className="contact__name">Email: </span>{email}</p>
    </div>
  );
}

export default Contact;
