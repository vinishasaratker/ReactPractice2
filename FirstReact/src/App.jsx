
import { useState } from "react";
function App() {

  let [num, setnum] = useState(0);

  const AddValue = () => {
    setnum(num + 1);
  }

  const subValue = () => {
    if (num > 0) {
      setnum(num - 1);
    }
  }
  

  return (
    <>
      <h2>Counter : {num}</h2>

      <button onClick={AddValue}>
        Increment : {num}
      </button>

      <br />
      <br />

      <button onClick={subValue}>
        Decrement : {num}
      </button>
    </>
    
  )
}

export default App;
