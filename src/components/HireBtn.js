import Styled from 'styled-components'

import Colors from '../colors'

const HireBtn = Styled.button`
  display: inline-block;
  background: ${Colors.primary};
  width: 11rem;
  height: 3rem;
  margin: 2rem 0;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 2px;
  transition: background 200ms ease-in-out;

  &:hover {
    background: #444;
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`

export default HireBtn