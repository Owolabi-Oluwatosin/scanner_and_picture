import React from 'react';
import { Home } from './containers/Home';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ScanQRCode } from './containers/ScanQRCode';
import { TakePicture } from './containers/TakePicture';
import { PrivateRoute } from './components/HOC/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/camera-to-cw1/home' element={<Home />} />
          <Route path='/camera-to-cw1/take-picture' element={<TakePicture />} />
          <Route path='/camera-to-cw1/scan-qr-code' element={<ScanQRCode />} />
        </Route>
        <Route path='*' element={<Navigate to='/camera-to-cw1/home' />} />
      </Routes>
    </div>
  );
}

export default App;


