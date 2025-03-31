import {
  Window,
  WindowHeader,
  WindowContent,
  Frame,
  Toolbar,
  Button,
  Divider,
} from 'react95';
import './App.css';

function App() {
  return (
    <main className="app">
      <Window className="window">
        <WindowHeader className="window-header">
          <span>ronbronson.design</span>
        </WindowHeader>
        <Toolbar className="toolbar">
          <Button variant="menu">Start</Button>
          <Divider orientation="vertical" size="sm" />
          <span>Strategic Foresight • Service Design • Systems Critique</span>
        </Toolbar>
        <WindowContent>
          <Frame variant="well" className="mb-4 p-3">
            <h1 className="title">Ron Bronson</h1>
            <p>
              Strategist, designer, and critical theorist working at the intersection of complex systems,
              public service delivery, and institutional design. I think about consequence, critique
              interfaces, and write about what happens when systems fail.
            </p>
          </Frame>

          <Frame className="p-3 mb-4">
            <h2>🔍 Current Work</h2>
            <ul>
              <li>
                <strong>Out of Scope:</strong> A consequence design reader —
                <a href="https://outofscopemag.com" target="_blank"> visit site</a>
              </li>
              <li>
                <strong>Tensile Futures:</strong> My consulting and foresight practice —
                <a href="https://tensilefutures.com" target="_blank"> visit site</a>
              </li>
              <li>
                <strong>Design For The Public:</strong> Civic design gathering —
                <a href="https://designforthepublic.com" target="_blank"> archive</a>
              </li>
              <li>
                <strong>PDX Digital Corps:</strong> Volunteer sprint for Portland-area nonprofits —
                <a href="https://digitalcorpspdx.org" target="_blank"> view project</a>
              </li>
            </ul>
          </Frame>

          <Frame className="p-3 mb-4">
            <h2>🎓 Teaching & Talks</h2>
            <p>
              In 2024, I taught Service Design at the University of Michigan in collaboration with the
              State of Michigan. <a href="https://tensilefutures.com/michigan-case-study" target="_blank">View case study</a>.
            </p>
            <p>
              I also speak regularly at universities (Portland State, George Fox) and to teams inside
              organizations about UX, transformation, and experience design.
            </p>
          </Frame>

          <Frame className="p-3">
            <h2>✍️ Selected Writing</h2>
            <ul>
              <li>
                <a href="https://outofscopemag.com/qx/index.html">Consequence Design Reader</a> — essays & provocations
              </li>
              <li>
                <a href="https://outofscopemag.com/interface-glossary.html">Interface Glossary</a> — system traps & metaphors
              </li>
              <li>
                <a href="https://blog.ronbronson.com">Blog</a> — more informal, topical riffs
              </li>
            </ul>
          </Frame>
        </WindowContent>
      </Window>
    </main>
  );
}

export default App;
