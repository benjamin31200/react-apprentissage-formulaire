import React, { useState } from 'react';
import './QuoteForm.css';
import styled from 'styled-components';

const Input = styled.input`
margin-bottom: 1em;
width: 90%;
padding: 0.25rem;
border: ${(props) => props.border};
border-radius: 3px;
border-color: ${(props) => props.borderClr};
`;

function QuoteForm(props) {
  const [character, setCharacter] = useState('');
  const [borderColor, setBorderColor] = useState(props.borderClr);
  const [border, setBorder] = useState(props.border);
  const [calcul, setCalcul] = useState("Il vous reste 0 caractères possibles");

  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    if (event.target.value.length <= 30) {
      setCharacter(event.target.value);
      setCalcul(`Il vous reste ${30 - event.target.value.length} caractères possibles`);
    } else {
      alert('Limite de caractères atteint');
      setBorderColor('red');
    }
  };

  return (
    <form className="QuoteForm" onSubmit={handleSubmit}>
      <label htmlFor="character">Character:</label>
      <Input 
      id="name"
      name="character"
      type="text"
      value={character}
      onChange={handleChange}
      borderClr={borderColor}
      border={border}>
      </Input>
      <p>{calcul}</p>
    </form>
  );
}

QuoteForm.defaultProps = {
  borderClr: "green",
  border: "3px solid"
}
export default QuoteForm;
