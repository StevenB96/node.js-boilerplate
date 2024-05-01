import {
  Route,
  Routes
} from 'react-router-dom';
import Layout from './ui_components/layouts/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          exact
          path="/a"
          element={<p>A</p>}
        />
        <Route
          exact
          path="/b"
          element={<p>B</p>}
        />
      </Routes>
    </Layout>
  );
}

export default App;
