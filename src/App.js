import Auth from "./components/Auth/Auth";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Auth />
      </div>
    </AuthContextProvider>
  );
}

export default App;
