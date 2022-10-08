import styled from 'styled-components';
import './App.css';
import { Home } from './components/pages/Home';

function App() {
  return (
    <AppHome>
      <Home />
    </AppHome>
  );
}
export default App;
const AppHome = styled.div`
  text-align: center;
`;
