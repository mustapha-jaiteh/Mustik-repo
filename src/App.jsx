import { useEffect, useState } from "react";
import DiceIcon from "./assets/images/icon-dice.svg";
import PatternDivider from "./assets/images/pattern-divider-desktop.svg";
import "./index.css";
import Loader from "./components/Loader";

function App() {
  const [adviceId, setAdviceId] = useState(null);
  const [advice, setAdvice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // fetch("https://api.adviceslip.com/advice")
    //   .then((Response) => Response.json())
    //   .then((Response) => {
    //     console.log({ Response });
    //     setAdviceId(Response.slip.id);
    //     setAdvice(Response.slip.advice);
    //   });
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((Response) => Response.json())
      .then((Response) => {
        console.log({ Response });
        setIsLoading(false);
        setAdviceId(Response.slip.id);
        setAdvice(Response.slip.advice);
      });
  };

  return (
    <>
      <>
        <main>
          <h1>Advice Generator APP</h1>
          <div className="card">
            <h3>
              Advice #<span>{adviceId}</span>
            </h3>
            <div className="advice loading">
              {isLoading ? <Loader /> : <blockquote>{advice}</blockquote>}
            </div>
            <div className="pattern-divider-wrapper">
              <img
                src={PatternDivider}
                className="pattern-divider"
                alt="Pattern Divider"
              />
            </div>
            <button id="advice-generator-button" onClick={fetchAdvice}>
              <img src={DiceIcon} alt="Button Icon" />
            </button>
          </div>
        </main>
        <footer>
          <div className="attribution"></div>
          <p className="copyright">
            © 2024 - MusTech - Mustapha Jaiteh the Junior Developer.
          </p>
        </footer>
        {/*  */}
      </>
    </>
  );
}

export default App;
