import logo from './logo.svg';
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBilDzyLdKGh8zuH-Crnl_4Jyj9QdQZLXs",
  authDomain: "sharer-21a0a.firebaseapp.com",
  databaseURL: "https://sharer-21a0a-default-rtdb.firebaseio.com",
  projectId: "sharer-21a0a",
  storageBucket: "sharer-21a0a.appspot.com",
  messagingSenderId: "753912898108",
  appId: "1:753912898108:web:f324520aa8196b75775939",
  measurementId: "G-8TBL7QQQXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
