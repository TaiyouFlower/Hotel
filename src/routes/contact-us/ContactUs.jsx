import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
const ContactUs = () => {
  const navigate = useNavigate();
  const [isSubbed, setIsSubbed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let alertMessage = 'Form submitted!';
    if (isSubbed) {
      alertMessage += '\nThank you for subscribing to our newsletter!';
    }
    alert(alertMessage);
    navigate(`/`);
  };
  const handleCheckbox = () => {
    if (isSubbed === false) {
      console.log(isSubbed);
      console.log(`set isSubbed to true`);
      setIsSubbed(true);
    } else {
      console.log(isSubbed);
      console.log(`set isSubbed to false`);
      setIsSubbed(false);
    }
  };
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <h1
        className="text-4xl font-bold mb-8"
        style={{ color: 'rgb(7, 68, 152)' }}
      >
        Contact Us
      </h1>
      <div
        className="w-full max-w-md p-6 rounded-lg shadow-md"
        style={{ backgroundColor: 'rgb(240, 248, 255)' }}
      >
        <h2
          className="text-2xl font-semibold mb-4"
          style={{ color: 'rgb(7, 68, 152)' }}
        >
          Contact Information
        </h2>
        <p className="mb-2" style={{ color: 'rgb(7, 68, 152)' }}>
          Email: info@example.com
        </p>
        <p className="mb-2" style={{ color: 'rgb(7, 68, 152)' }}>
          Phone: +123 456 7890
        </p>
        <p className="mb-4" style={{ color: 'rgb(7, 68, 152)' }}>
          Address: 123 Example Street, City, Country
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2"
            style={{ color: 'rgb(7, 68, 152)' }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mb-4 p-2 border rounded-md"
            style={{ borderColor: 'rgb(7, 68, 152)' }}
            required
          />

          <label
            htmlFor="message"
            className="mb-2"
            style={{ color: 'rgb(7, 68, 152)' }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="mb-4 p-2 border rounded-md"
            style={{ borderColor: 'rgb(7, 68, 152)' }}
            required
          />
          <div className="flex items-center gap-2 mb-4">
            <label
              htmlFor="newsletter"
              className=""
              style={{ color: 'rgb(7, 68, 152)' }}
            >
              Subscribe to our Newsletter
            </label>
            <input
              onClick={handleCheckbox}
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className=""
            />
          </div>
          <button
            type="submit"
            className="py-2 rounded-md"
            style={{ backgroundColor: 'rgb(7, 68, 152)', color: 'white' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
