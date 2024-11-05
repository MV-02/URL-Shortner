import { useState,useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShortenedUrl = () => {
  const [shortenLink, setShortenLink] = useState("sample");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer=setTimeout(() => {
      setCopied(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [copied])
  

  return (
    <div className="ResultContainer">
      <p>{shortenLink}</p>
      <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
        <button className= {copied?"copied":""}>Copy</button>
      </CopyToClipboard>
    </div>
  );
};

export default ShortenedUrl;
