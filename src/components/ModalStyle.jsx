import styled from "styled-components";

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
  @media (max-width: 768px) {
    padding: 4px 14px;
    font-size: 1.2rem;
  }
`;
export const Button2 = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  user-select: none;
  font-size: 1.5rem;
  padding: 3px 10px;
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
    padding: 4px 14px;
    background-color: red;
    color: var(--primaryColor);
    font-weight: bolder;
    box-shadow: 2px 7px 10px 5px #00000053;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const TitleModal = styled.div`
  font-size: 2rem;
  color: #00f260;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 20px;
    margin-bottom: 0px;
  }
`;
export const Input = styled.input`
  ::placeholder {
    color: #929292;
  }
  min-width: 400px;
  font-size: 1.3rem;
  border: none;
  outline: none;
  border-radius: 20px;
  display: flex;
  padding: 8px;
  padding-left: 10px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    min-width: 200px;
  }
`;
export const TextArea = styled.textarea`
  ::placeholder {
    color: #929292;
  }
  width: 100%;
  font-size: 1.3rem;
  border-radius: 20px;
  padding: 10px;
  border: none;
  outline: none;
  margin-bottom: 10px;
`;
