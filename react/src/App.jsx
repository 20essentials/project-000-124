import { createGlobalStyle } from 'styled-components';
import ButtonSlint from './ButtonSlint';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: aliceblue;
    background-image: url(${(props) => props.currentfoto});
    transition: background-image .5s ease;
    background-size: 200px;
    display: flex;
    flex-wrap: wrap;
    height: 100dvh;
    place-content: center;
  }
`

const App = () => {
  const [currentPhoto, setCurrentPhoto] = useState('public/n1.avif')

  const handleClick = (value) => {
    setCurrentPhoto(`public/n${value}.avif`)
  }

  return (
    <>
      <GlobalStyle currentfoto={currentPhoto}/>
      <ButtonSlint handleClick={handleClick} />
    </>
  )
};

export default App;
