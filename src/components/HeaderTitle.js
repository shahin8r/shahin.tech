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
`

export default HeaderTitle