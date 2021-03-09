import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
};

ReactDOM.render(
  // React element
  <App />,
  // Where to render said element
  document.getElementById('app')
);
