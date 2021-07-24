import Routes from "./routes/route";
import GlobalStyle from "./styles/globalStyles";
import { useAuth } from "./providers/auth";


function App() {
  const { masterAuth, clientAuth } = useAuth();

  return (
    <div className="App">
      <button onClick={()=>console.log(masterAuth)}>teste</button>
      <GlobalStyle />
      <Routes />
    </div>
  );
}

export default App;
