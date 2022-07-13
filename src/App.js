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
                    <Navbar.Brand href="/" onClick={
                        (e) => {
                            e.preventDefault();
                            if (window.location.search === "") return;

                            const state = {
                                subject: "null",
                                subcategory: "null",
                                year: "null",
                                gender: "null",
                                candidateType: "a"
                            };
                            window.history.pushState(state, "", "/");

                            // Trigger update in StatsView
                            window.history.pushState(state, "", "/");
                            window.history.back();
                        }
                    }>HKDSE Subject Results Statistics</Navbar.Brand>
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
