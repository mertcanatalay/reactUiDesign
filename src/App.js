import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProjectCardPage from './pages/ProjectCardPage';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings';
import Sidenav from './Sidenav';
import Login from './components/login/Login';
import Register from './components/register/Register';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/login' element={<Login />} />
          <Route path='/auth/register' element={<Register />} />
          <Route element={<><Sidenav /> </>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<ProjectCardPage />} />
            <Route path="/settings" element={<Settings />} />

            {/* {routeData.map(item => {
              return <>
                <Route path={item.Path} element={<ProjectCardPage />} />
              </>
            })} */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
