import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovies from "./components/searchMovies"
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import reportWebVitals from './reportWebVitals';



class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

ReactDOM.render(<Main/>,document.getElementById('root'));
