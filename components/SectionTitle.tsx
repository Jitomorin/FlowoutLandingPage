import styled from 'styled-components';
import { media } from 'utils/media';

const SectionTitle = styled.div`
  font-size: 5.2rem;
  font-weight: 800;
  line-height: 1.1;
  width: 100%;
  margin: 0 auto;
  letter-spacing: -0.03em;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 4rem;
  }
`;

export default SectionTitle;
