import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Registration from './component/registration';
import Login from './component/Login';

function App() {
  const [rData, setData] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/register"
            element={<Registration regData={setData} />}
          />

          <Route
            path="/login"
            element={<Login rData={rData} />}
          />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <pre>{JSON.stringify(rData, null, 2)}</pre>
    </div>
  );
}

export default App;