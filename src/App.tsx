import { FC, PropsWithChildren } from 'react';
import Layout from './Layout';

const App: FC<PropsWithChildren> = ({ children }) => <Layout>{children}</Layout>;

export default App;
