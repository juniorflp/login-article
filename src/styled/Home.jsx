import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(-45deg, var(--gradient)) no-repeat;
  background-size: 200% 200%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
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

export const Header = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  margin-top: 20px;
  padding: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    text-align: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 50px;
  }
`;

export const Title = styled.h2`
  color: #0b1020;
  font-size: 2.5rem;
  font-weight: bold;
`;
export const TitleUser = styled.h3`
  color: #ffffff;
  font-size: 1.6rem;
`;
export const TitleUser2 = styled.h3`
  color: #00f260;
  font-size: 1.6rem;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 60%;
  min-height: 500px;
  @media (max-width: 768px) {
    width: 95%;
    margin-top: 90px;
    height: 100%;
  }
`;

export const ContainerArticle = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  border-radius: 20px;
  background-color: #0b1020;
  box-shadow: 2px 7px 10px 5px #0000007f;
  @media (max-width: 600px) {
    min-height: 300px;
    height: 100%;
    padding: 10px;
  }
`;

export const CardArticle = styled.section`
  display: flex;
  height: 300px;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    height: 100%;
  }
`;

export const Thumbnail = styled.img`
  width: 200px;
  border-radius: 10px;
  box-shadow: 2px 7px 10px 5px #00000053;
  @media (max-width: 600px) {
  }
`;
export const ImgTitle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardInfo = styled.div`
  background-color: #0a0913;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 3px solid #ffffff34; */
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  box-shadow: inset 2px 7px 10px 5px #00000031;
`;

export const TitleArticle = styled.h2`
  color: #00f260;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  color: #ffffff9c;
  font-size: 1.4rem;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const BodyArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  min-height: 80px;
  border: 3px solid #ffffff34;
  border-radius: 10px;
  overflow: auto;
`;

export const BodyText = styled.p`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 20px;
  color: #ffffff9c;
  font-size: 1.2rem;
  overflow-wrap: break-word;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const ContainerEdit = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

export const Icon = styled.div`
  cursor: pointer;
  font-size: 1.4rem;
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
    background-color: red;
    color: var(--primaryColor);
    font-weight: bolder;
    box-shadow: 2px 7px 10px 5px #00000053;
  }
  @media (max-width: 768px) {
    padding: 4px 14px;
    font-size: 1.2rem;
  }
`;
