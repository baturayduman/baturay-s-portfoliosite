import './App.css';
import Currency from './components/Currency';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export default function App() {



    return (


        <Router>
            <div className="app-container">
                {/* Menü */}
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/app">ANA SAYFA</Link>
                            </li>


                            <li>
                                <Link to="/currency">DÖVİZ HESAPLAMA UYGULAMASI</Link>
                            </li>
                            <li>
                                <Link to="/about">HAKKIMDA</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* Sayfa Yönlendirmeleri */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Routes>
                        <Route path="/" element={<div></div>} /> {/* Ana sayfa boş */}
                        <Route path="/currency" element={<Currency />} /> {/* Döviz hesaplama sayfası */}
                        <Route path="/about" element={<About />} /> {/* Hakkımda sayfası */}
                    </Routes>
                </div>

                {/* Footer */}
                <footer style={{
                    marginTop: '400px',
                    backgroundColor: '#f1f1f1',
                    textAlign: 'center',
                    padding: '10px 0'
                }}>
                    <p> <strong> <strong>YAPIM AŞAMASINDADIR</strong> </strong>  </p>
                    <p> Kişisel portföy sitesi.Hiçbir kurum kuruluşla alakasi yoktur. React ile yapilmaktadır. </p>
                    <p> <strong> Baturay Duman. 2024. IZMIR </strong></p>
                </footer>
            </div>
        </Router>

    );
}



