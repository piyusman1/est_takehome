import React, { useEffect, useState } from 'react';
import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import ListImages from './components/images/ListImages';
import './App.css'


const App: React.FC = () => {
  return (
    <Provider theme={defaultTheme}>
      <ListImages />
    </Provider>
  );
};

export default App;