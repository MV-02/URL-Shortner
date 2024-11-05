import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ShortenedUrl = ({ inputValue }) => {
  console.log(inputValue);
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [laoding, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const token = process.env.REACT_APP_API_KEY;
  console.log(token);
  const notify = () => {
    toast.success("Copied!", {
      position: "bottom-center",
      autoClose: 1000,
    });
  };
  const fetchData = async () => {
    try {
      setLoading(true);
      const res=await axios
        .post(
          "https://api-ssl.bitly.com/v4/shorten",
          {
            long_url: `${inputValue}`, // The long URL you want to shorten
            domain: "bit.ly", // The domain for the shortened URL
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Insert token here
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          setShortenLink(response.data.link)
          console.log("Shortened URL:", response.data.link); // Log the shortened URL
        })
        .catch((error) => {
          console.log(error);
          setError(error);
          
        });
    } catch {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (laoding) {
    return <p className="noData">Loading....</p>;
  }
  if (error) {
    return <p className="noData">Somethings Went Wrong :(</p>;
  }


  return (
    <>
      {shortenLink && (
        <div className="ResultContainer">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => {
              setCopied(true);
            }}
          >
            <button
              disabled={shortenLink === "" ? true : false}
              onClick={notify}
              className={copied ? "copied" : ""}
            >
              Copy
            </button>
          </CopyToClipboard>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default ShortenedUrl;
