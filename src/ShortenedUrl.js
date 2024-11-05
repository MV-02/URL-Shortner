import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShortenedUrl = () => {
  const [shortenLink, setShortenLink] = useState("sample");
  const [copied, setCopied] = useState(false);
  const notify = () => {
    toast.success("Copied!", {
      position: "bottom-center",
      autoClose: 1000,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);
  return (
    <div className="ResultContainer">
      <p>{shortenLink}</p>
      <CopyToClipboard
        text={shortenLink}
        onCopy={() => {
          setCopied(true);
        }}
      >
        <button onClick={notify} className={copied ? "copied" : ""}>
          Copy
        </button>
      </CopyToClipboard>
      <ToastContainer />
    </div>
  );
};

export default ShortenedUrl;
