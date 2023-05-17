import React, { useState } from 'react';
import Login from './Login';
import styled from 'styled-components';

const ModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <LoginBtn onClick={openModal}> 로그인 </LoginBtn>
        {isModalOpen && <Login onClose={closeModal} />}
    </div>
  );
};

export default ModalContainer;


const LoginBtn = styled.button`
    background-color: #4CAF50;
    border: none; 
    color: white;
    padding: 10px; 20px;
    text-align: center;
    align-items: center;
    text-decoration: none;
    display: flex;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;

    &:hover {
        background-color: #45a049;
    }
`;