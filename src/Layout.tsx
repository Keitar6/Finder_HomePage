import Header from './components/organisms/Header/Header';
import GlobalFontsStyle from './assets/fonts/fonts';
import GlobalStyle from './theme/globalStyles';
import Footer from './components/organisms/Footer/Footer';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <GlobalStyle />
    <GlobalFontsStyle />
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  </>
);

export default Layout;
