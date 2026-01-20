import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import CategoryPage from './pages/CategoryPage';
import './i18n/config';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="/category/:id" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
