import React, { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAgreeToTermsChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, including validation, sending data, etc.
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <span>
            <input
              type="text"
              placeholder="Work Email"
              value={email}
              onChange={handleEmailChange}
            />
          </span>
          <span>
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </span>
        </div>
        <div className="form-row">
          <h3>Send a Note</h3>
          <input
            type="text"
            placeholder="Enter your note here"
            value={note}
            onChange={handleNoteChange}
          />
        </div>
        <div className="form-row">
          <label>
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleAgreeToTermsChange}
            />
            I agree to the Terms and Conditions
          </label>
        </div>
        <div className="form-row">
          <button type="submit">Send Request</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
