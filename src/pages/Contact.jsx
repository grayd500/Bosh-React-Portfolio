// src/pages/Contact.jsx:


import { useState, useEffect } from 'react';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateField = (name, value) => {
    if (value.trim() === '') {
      setErrors(prev => ({
        ...prev,
        [name]: 'This field is required',
      }));
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors(prev => ({
        ...prev,
        [name]: 'Email address is invalid',
      }));
    } else {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formIsValid = true;
    for (const name in contact) {
      validateField(name, contact[name]);
      if (!contact[name]) {
        formIsValid = false;
      }
    }
    if (formIsValid) {
      console.log('Form data:', contact);
      // Here you would typically send the contact data to your server
      // For now, we're just logging it to the console
    }
  };

  useEffect(() => {
    // Add 'body-with-form' class to the body tag when the component mounts
    document.body.classList.add('body-with-form');

    // Clean up: Remove 'body-with-form' class when the component unmounts
    return () => {
      document.body.classList.remove('body-with-form');
    };
  }, []);

  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={contact.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;