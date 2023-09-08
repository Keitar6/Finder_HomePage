import Header from './components/organisms/Header/Header';
import GlobalFontsStyle from './assets/fonts/fonts';
import GlobalStyle from './theme/globalStyles';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <GlobalStyle />
    <GlobalFontsStyle />
    <LayoutWrapper>
      <Header />
      {children}
    </LayoutWrapper>
  </>
);

export default Layout;
