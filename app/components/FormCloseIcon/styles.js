import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

export const FA = styled(FontAwesome) `
  color: ${(props) => props.color};
  transform:${(props) => props.transform};
`;
