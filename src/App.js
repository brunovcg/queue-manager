import Routes from "./routes/route";
import GlobalStyle from "./styles/globalStyles";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
       <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
      <GlobalStyle />
     
      <Routes />
    </div>
  );
}

export default App;
