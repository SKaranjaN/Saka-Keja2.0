import React, { useState } from 'react';
import '../styles/Payments.css';

function Payments() {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePayment = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://127.0.0.1:5000/payments?phoneNumber=${phoneNumber}&amount=${amount}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSuccessMessage('Your payment is successful!');
        
      } else {
        const data = await response.json();
        alert(`Payment failed: ${JSON.stringify(data)}`);
      }
    } catch (error) {
      console.error('Error occurred during payment:', error);
    }
  };

  return (
    <div className="payments-container">
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}
      <form className="payments-form" onSubmit={handlePayment}>
        <div className="mpesa-image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1200px-M-PESA_LOGO-01.svg.png"
          alt="Mpesa"
          style={{ width: '130px', height: 'auto', margin: '0px 0' }}
        />
        </div>
        <div className="payment-input">
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number start with 254"
          />
        </div>
        <div className="payment-input">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Amount'
          />
        </div>
        <button className="payment-button" type="submit">
          Make Payment
        </button>
      </form>
    </div>
  );
}

export default Payments;
