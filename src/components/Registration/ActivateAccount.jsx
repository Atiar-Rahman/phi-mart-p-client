import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Success from '../Success';
import Error from '../Error';
import apiClient from '../../services/api-client';

const ActivateAccount = () => {
  const { uid, token } = useParams();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    apiClient
      .post('/auth/users/activation/', { uid, token })
      .then(res => {
        console.log(res.data);
        setMessage("Account activated successfully!");
        setTimeout(() => navigate('/login'), 3000);
      })
      .catch(err => {
        if (err.response) {
          console.error("Activation error:", err.response.data);
          setError(err.response.data.detail || "Invalid activation link");
        } else {
          console.error(err);
          setError("Something went wrong, please try again later.");
        }
      });
  }, [uid, token, navigate]);

  return (
    <div className="flex items-center justify-center bg-amber-100 min-h-screen">
      <div className="card bg-base-100 shadow-xl p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Account Activation</h1>
        {message && <Success success={message} />}
        {error && <Error error={error} />}
      </div>
    </div>
  );
};

export default ActivateAccount;
