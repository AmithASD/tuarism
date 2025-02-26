import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

const Loader = styled.div`
  width: 100px;
  height: 4px;
  background: #000;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 50px;
    height: 100%;
    background: #3498db;
    animation: ${loadingAnimation} 1s infinite;
  }
`;

const HorizontalLoader = () => {
  return <Loader />;
};

export default HorizontalLoader;
