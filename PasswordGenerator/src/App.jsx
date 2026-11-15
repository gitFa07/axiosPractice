import { useCallback, useEffect, useState, useRef } from "react"

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharacter, setSpecialCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //ref
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (specialCharacter) str += "!@#$%^&*()-+=_{}[]"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, specialCharacter, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, specialCharacter, numberAllowed, passwordGenerator])

  return (
    <div className="bg-[#111] w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-[#EEE]">Password generator</h1>
      <div className="w-1/3 h-1/5 bg-[#EEE]">
        <input
          type="text"
          value={password}
          className="w-4/5 py-1 px-3 border-[#111] border-2"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className="bg-[#EEE]">
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          className="cursor-pointer"
          onChange={(e) => {
            setLength(e.target.value)
          }}
        />
        <label>Length: {length}</label>
      </div>
      <div className="bg-[#EEE]">
        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="bg-[#EEE]">
        <input
          type="checkbox"
          defaultChecked={specialCharacter}
          id="specialCharacter"
          onChange={() => {
            setSpecialCharacter((prev) => !prev)
          }}
        />
        <label htmlFor="specialCharacter">Special Character</label>
      </div>
    </div>
  )
}

export default App
