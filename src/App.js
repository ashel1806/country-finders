import {
  Route,
  Routes
} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='countries'>
        <Route path=':countryCode' element={<Details />} />
      </Route>
    </Routes>
  );
};

export default App;