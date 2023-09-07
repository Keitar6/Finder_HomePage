import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CenterWrapper: FC<PropsWithChildren> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default CenterWrapper;
