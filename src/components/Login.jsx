import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  background-color: #fff;
  padding: 200px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 600px;
  height: 600px;
  margin: 0 auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에서 로그인 처리를 수행하고, 필요에 따라 상태를 업데이트하거나 다른 작업을 수행할 수 있습니다.

    // 로그인 처리 후 모달을 닫는 함수를 호출합니다.
    onClose();
  };

  return (
    <ModalContainer>
      <Modal>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Title>로그인 하기</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            아이디:
            <Input type="text" value={username} onChange={handleUsernameChange} />
          </Label>
          <Label>
            패스워드:
            <Input type="password" value={password} onChange={handlePasswordChange} />
          </Label>
          <Button type="submit">Log In</Button>
        </Form>
      </Modal>
    </ModalContainer>
  );
};

export default Login;
