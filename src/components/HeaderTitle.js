import Styled from 'styled-components'

import Colors from '../colors'

const HeaderTitle = Styled.h1`
  color: ${Colors.text};
  font-size: 2rem;
  line-height: 2.5rem;
  margin: 2rem 0 3rem;
  text-align: center;

  strong {
    color: ${Colors.primary};
  }

  @media (min-width: 980px) {
    font-size: 2.5rem;
    line-height: 5rem;
    margin: 1.5rem 0 5.5rem;
    text-align: left;
  }
`

export default HeaderTitle