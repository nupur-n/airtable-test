import './App.css';
import { ShowFormResponses } from './ShowFormResponses';

import { Container, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
       <Container id="form" className="justify-content-md-center">
          <Card className="form-show">
            <iframe
              className="airtable-embed airtable-dynamic-height"
              title="Test Form"
              src="https://airtable.com/embed/shrhiENR5h3PM7nuz?backgroundColor=gray"
              height="1000"
              width="50%"
            ></iframe>
          </Card>
          <ShowFormResponses/>
      </Container>
    </div>
  );
}

export default App;
