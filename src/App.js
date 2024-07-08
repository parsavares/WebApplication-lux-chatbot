import './App.css';
import Home from './Home';
import TodoApp from './TodoApp';
import Navbar from './Navbar';
import SignIn from './SignIn';
import { Route, Routes } from 'react-router-dom';
import { Paper } from '@mui/material';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import AuthProvider from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Profile from './Profile';
import Conversation from './Conversation';

function App() {
  return (
    <AuthProvider>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          backgroundColor: "#ffffff"
        }}
        elevation={0}
      >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/conversation" element={<Conversation />} />
          </Route>
          <Route path="/todos" element={<TodoApp />} />
        </Routes>
      </Paper>
    </AuthProvider>
  );
}

export default App;
