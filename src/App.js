import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Toaster } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import './App.css';
import About from './components/About';
import StatsView from './components/StatsView';

function App() {
    const { t, i18n } = useTranslation();

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
                    }>{t("title")}</Navbar.Brand>
                    {
                        i18n.languages[0].startsWith("en")
                            ? <Navbar.Text>
                                <a className="change-lang" onClick={() => i18n.changeLanguage("zh")}>中文</a>
                            </Navbar.Text>
                            : <Navbar.Text>
                                <a className="change-lang" onClick={() => i18n.changeLanguage("en")}>English</a>
                            </Navbar.Text>
                    }
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
