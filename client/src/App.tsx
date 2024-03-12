import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import ListImages from './components/imagesUnlimitedReactions/ListImages';
import ListImagesLimited from './components/imagesLimitedReaction/ListImagesLimited';
import './App.css'


const App: React.FC = () => {
  return (
    <Provider theme={defaultTheme}>

      <Router>
        <Routes>
        <Route path="/" element={<ListImagesLimited/>} />
          <Route path="/images" element={<ListImagesLimited/>} />
          <Route path="/unlimited" element={<ListImages />} />
        </Routes>
    </Router>
    </Provider>
  );
};

export default App;