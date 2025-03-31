import { Window, WindowHeader, WindowContent } from 'react95';
import './App.css';

function App() {
  return (
    <main className="app">
      <Window className="window">
        <WindowHeader className="window-header">ronbronson.design</WindowHeader>
        <WindowContent>
          <h1>Ron Bronson</h1>
          <p>Strategic foresight, consequence design, and critical systems thinking.</p>
          <p>I build tools, run experiments, and write about the failures and futures of infrastructure, interfaces, and digital governance.</p>
        </WindowContent>
      </Window>
    </main>
  );
}

export default App;
