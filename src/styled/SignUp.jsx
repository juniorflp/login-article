import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(-45deg, var(--gradient2)) no-repeat;
  background-size: 200% 200%;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  animation: gradient 15s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export const Body = styled.div`
  display: flex;
  max-width: 500px;
  width: 50%;
  height: 500px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  background-color: #0b1020;
  box-shadow: 2px 7px 10px 5px #0000007f;
  position: relative;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
export const Titulo = styled.h1`
  user-select: none;
  font-size: 3rem;
  text-align: center;
  position: absolute;
  margin-top: 20px;
  top: 0;
  color: #00f260;
  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const ContainerInput = styled.form`
  width: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 500px) {
    margin-top: 0px;
  }
`;

export const Input = styled.input`
  ::placeholder {
    color: #929292;
  }
  /* min-width: 400px; */
  width: 80%;
  font-size: 1.3rem;
  border: none;
  outline: none;
  border-radius: 20px;
  display: flex;
  padding: 8px;
  padding-left: 10px;
  margin-bottom: 10px;
  @media (max-width: 500px) {
    width: 90%;
    font-size: 1.1rem;
  }
`;
export const Caracter = styled.span`
  font-size: 0.8rem;
  color: #ffffff7d;
  text-align: left;
  margin-top: -10px;
  width: 79%;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  user-select: none;
  font-size: 1.5rem;
  margin-top: 20px;
  padding: 6px 20px;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  :hover {
    letter-spacing: 3px;
    padding: 6px 28px;
    background-color: #00f260;
    color: var(--primaryColor);
    font-weight: bolder;
    box-shadow: 2px 7px 10px 5px #00000053;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
    padding: 4px 14px;
    margin-top: 50px;
  }
`;

export const TextRegister = styled.span`
  user-select: none;
  color: #00f260;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Text = styled(Link)`
  :hover {
    color: #8dc2ff;
    text-decoration: underline;
  }
  margin-left: 3px;
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.2s ease-in;
  :visited {
    :hover {
    }
    color: #ffffff;
  }
`;
