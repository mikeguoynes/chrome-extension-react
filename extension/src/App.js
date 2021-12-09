import './App.css';

import { viewCode } from './main';

function App() {
  return (
    <div className="modal-backdrop">
      <header className="modal">
        <button onClick={viewCode}>
          View Code Only
        </button>
      </header>
    </div>
  );
}

export default App;
