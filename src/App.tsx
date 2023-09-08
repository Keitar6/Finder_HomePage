import { FC, PropsWithChildren } from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import TilesList from './components/molecules/TilesList/TilesList';

const AppContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1281px) {
    margin: 0 auto;
    max-width: 1120px;
  }
  @media (min-width: 961px) {
    margin: 0 auto;
  }
`;

const App: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <AppContent>
        <TilesList />
      </AppContent>
    </Layout>
  );
};

export default App;
