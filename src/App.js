import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { GithubProvider } from './context/github/GithubContext';

function App() {
  return (
    // make sure to wrap the Elements Using the Githubprovider
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main className="container mx-auto px-3 pb-12">
            {/* My pages Routes  goes here  */}
            {/* https://reactrouter.com/en/main/start/overview */}
            {/* https://www.npmjs.com/package/react-router-dom */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Adding the footer  */}
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
