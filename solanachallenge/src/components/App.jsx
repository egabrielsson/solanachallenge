import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-purple-600 flex justify-center items-center h-24 w-24">
      <p className="text-white underline">Phantom</p>
    </div>
  );
}

export default App;
