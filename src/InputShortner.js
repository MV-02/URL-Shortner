import { useState } from "react";

const InputShortner = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const handleClick =()=>{
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="InputContainer">
      <h1>
        Url <span>Shortner</span>
      </h1>
      <div>
        <input
          type="text"
          id="inputUrl"
          placeholder="Paste the link"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick} type="button">Shorten</button>
      </div>
    </div>
  );
};

export default InputShortner;
