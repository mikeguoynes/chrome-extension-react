import './App.css';

import { viewCode } from './main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={viewCode}>
          View Code Only
        </button>
      </header>
    </div>
  );
}

export default App;
