import React, { useState } from 'react';

const ContactForm = ({ good }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call OSSale method here
    // example of calling OSSale
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>Заполните контактные данные</h1>
      <input
        type="text"
        placeholder="Имя"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Телефон"
        required
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Оплатить</button>
    </form>
  );
};

export default ContactForm;