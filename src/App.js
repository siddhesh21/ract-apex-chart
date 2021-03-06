import "./App.css";
import ApexChart from "./ApexChart";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  // React Firebase Hooks

  return (
    <div className="app">
      <h1>Chart App</h1>
      {loading ? (
        <h1>LOADING</h1>
      ) : user ? (
        <ApexChart />
      ) : (
        <button onClick={signIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;
