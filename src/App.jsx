import { Result } from "./components/Result";
import { Input } from "./components/Input";
import { TopColors } from "./components/TopColors";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const handleClick = (e) => {
    let digit = e.target.textContent.trim();
    setInput(digit);
    console.log(digit);
    if (digit === "AC") {
      setInput("");
      setOutput("");
    } else if (digit === "=") {
      setOutput(eval(input).toFixed(2));
      setInput(input);
    } else {
      setInput(input + digit);
    }
  };

  return (
    <>
      <div className="bg-[#191717] w-full h-screen sm:max-w-[450px] sm:max-h-[670px] mx-auto flex flex-col justify-center items-center text-white  sm:rounded-md sm:mt-12">
        <TopColors />
        <Result input={input} output={output} />
        <Input handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
