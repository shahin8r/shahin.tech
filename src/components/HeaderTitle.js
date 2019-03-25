import Styled from 'styled-components'

import Colors from '../colors'

const HeaderTitle = Styled.h1`
  color: ${Colors.text};
  font-size: 3rem;
  margin-top: 0;
  line-height: 5rem;
  margin-bottom: 5.5rem;

  strong {
    color: ${Colors.primary};
  }
`

export default HeaderTitle