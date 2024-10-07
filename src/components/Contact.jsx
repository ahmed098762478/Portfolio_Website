import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="my-20">
      <h1 className="text-center text-4xl mb-12">Contact</h1>
      <div className="text-center mb-8 text-white">
        <p>Email: <a href="mailto:ahm.lahbabi555@gmail.com" className="text-blue-400">ahm.lahbabi555@gmail.com</a></p>
        <p>Mobile: 0636290053</p>
        <p>Location: Rabat, Salé, Casablanca</p>
        <p>Date of Birth: 01/07/1998</p>
        <p>Nationality: Moroccan</p>
        <p>
          LinkedIn: 
          <a href="https://www.linkedin.com/in/ahmed-lahbabi-7642b2203/" className="text-blue-400" target="_blank" rel="noopener noreferrer"> Ahmed Lahbabi</a>
        </p>
      </div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700 mb-2">Name :</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Phone :</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            className="w-full p-2 border border-gray-300 rounded" 
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
