import { Window, WindowHeader, WindowContent } from 'react95';
import './App.css';

function App() {
  return (
    <main className="app">
      <Window className="window">
        <WindowHeader className="window-header">ronbronson.design</WindowHeader>
        <WindowContent>
          {/* content will be injected here */}
        </WindowContent>
      </Window>
    </main>
  );
}

export default App;
