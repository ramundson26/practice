import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>ALERT</Alert>
      )}
      <button onClick={() => setAlertVisibility(true)}>My Button</button>
    </div>
  );
}
export default App;
