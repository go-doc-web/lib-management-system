import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function GoBackBtn() {
  const location = useLocation();
  const from = location.state?.from || '/';
  const navigate = useNavigate();
  const goBack = () => navigate(from);
  return (
    <button onClick={goBack}>
      <FaArrowLeft />
    </button>
  );
}

export default GoBackBtn;
