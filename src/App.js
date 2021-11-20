import React from "react";
import TableData from "./component/TableData";
import configureStore from './redux/configureStore'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={configureStore}>
      <div className="App">
        <header className="App-header">
          Crenspire Techonologies Employee Detail
        </header>
        <TableData />
      </div>
    </Provider>
  );
}

export default App;
