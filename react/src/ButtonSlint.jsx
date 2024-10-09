import styled from 'styled-components';

const ButtonS = styled.aside`
  --size: 150px;
  width: var(--size);
  height: var(--size);
  background-color: transparent;
  border-radius: 50%;
  position: relative;

  .container {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, #f2faaa, #b2e5f8, #f4b3ef);
    border-radius: 50%;
    position: relative;
    outline: 2px solid #0008;
    transition: transform 0.5s ease;
    transform: scale(0) rotate(-180deg);

    &:hover {
      transform: scale(1) rotate(0deg);
    }

    &::before,
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      top: calc(50% - 1px);
      left: 0;
      background-color: #0008;
      position: absolute;
      z-index: 2;
    }

    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  div {
    width: 30px;
    height: 30px;
    background-color: #0f14;
    border-radius: inherit;
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    position: absolute;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition: background-color 0.4s ease;

    &:hover {
      background-color: #f004;
    }
  }

  .top,
  .bottom {
    left: 50%;
    transform: translateX(-50%);
  }

  .top {
    top: 10%;
  }

  .bottom {
    bottom: 10%;
  }

  .left,
  .right {
    top: 50%;
    transform: translateY(-50%);
  }

  .left {
    left: 10%;
  }

  .right {
    right: 10%;
  }

  .center {
    top: 50%;
    left: 50%;
    z-index: 4;
    transform: translate(-50%, -50%);

    &:hover + .container {
      transform: scale(1) rotate(0deg);
    }
  }
`;

const ButtonSlint = ({ handleClick }) => {
  return (
    <ButtonS>
      <div className='center'>🔘</div>
      <section className='container'>
        <div onClick={() => handleClick('1')} className='left'>
          📕
        </div>
        <div onClick={() => handleClick('2')} className='right'>
          📗
        </div>
        <div onClick={() => handleClick('3')} className='top'>
          📘
        </div>
        <div onClick={() => handleClick('4')} className='bottom'>
          📙
        </div>
      </section>
    </ButtonS>
  );
};

export default ButtonSlint;
