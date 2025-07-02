import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

  // useRef

  const passRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllow) str += "1234567890";
    if (charAllow) str += "!@#$%^&*()-_=+{};:/?.<>[]|~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, numberAllow, charAllow, setPass]);

  const copyPassToClip = useCallback(() => {
    if(passRef.current) {
    passRef.current.focus();
    passRef.current.select();
    passRef.current.setSelectionRange(0,16);
    window.navigator.clipboard.writeText(pass)
    }
  }, [pass]);

  useEffect(
    () => generatePassword(),
    [length, numberAllow, charAllow, generatePassword]
  );

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 py-3 my-8 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center">Password generator</h1>
        <div
          className="flex shadow rounded-lg overflow-hidden
        mb-4"
        >
          <input
            type="text"
            value={pass}
            ref={passRef}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />

          <button
            onClick={copyPassToClip}
            className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 
             hover:bg-blue-700 hover:scale-105 transition-all duration-200"
          >copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label>Numbers: {numberAllow}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label>Characters: {charAllow}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
