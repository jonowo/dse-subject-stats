import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Toaster } from 'react-hot-toast';
import './App.css';
import About from './components/About';
import StatsView from './components/StatsView';

function App() {
    return (
        <div className="App">
            <Toaster />

            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href="/">HKDSE Subject Results Statistics</Navbar.Brand>
                </Container>
            </Navbar>

            <Container className="mt-2">
                <StatsView />
                <About />
            </Container>
        </div>
    );
}

export default App;
