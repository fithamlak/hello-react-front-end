import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Greeting from './components/Greeting';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Greeting />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
