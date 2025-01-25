import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import Login from './components/Login';
import { Container } from './styles/components';
import { GoogleOAuthProvider } from '@react-oauth/google';

const Dashboard: React.FC = () => (
  <Container>
    <h1>Task Management</h1>
    <TaskForm />
    <TaskBoard />
  </Container>
);

const AppContent: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return isAuthenticated ? <Dashboard /> : <Login />;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ''}>
        <AppContent />
      </GoogleOAuthProvider>
    </Provider>
  );
};

export default App; 