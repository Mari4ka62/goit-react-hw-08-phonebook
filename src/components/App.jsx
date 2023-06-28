import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

export function App() {
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route />
        <Route />
        <Route />
        <Route />
      </Route>
    </Routes>
  </>;
}
