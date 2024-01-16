import { Box } from '@mui/material';
import './App.css';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/> 
        <Box padding={2}>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Dashboard/>} />
              <Route path={'/login'} element={<Login/>} />
              <Route path={'/register'} element={<RegisterPage/>} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Provider>
     
    </div>
  );
}

export default App;
