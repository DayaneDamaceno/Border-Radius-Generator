import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);

  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const [borderStyle, setBorderStyle] = useState({
    borderTopLeftRadius: Number(a),
    borderTopRightRadius: Number(b),
    borderBottomRightRadius: Number(c),
    borderBottomLeftRadius: Number(d),
  });

  function handleFormValues(e) {
    e.preventDefault();
  }

  function pressEnter(e) {
    if (e.key !== "Enter") return;
    setBorderStyle({
      borderTopLeftRadius: a + "%",
      borderTopRightRadius: b + "%",
      borderBottomRightRadius: c + "%",
      borderBottomLeftRadius: d + "%",
    });
    setMessage(`.div{ \n border-radius: ${a}%, ${b}%, ${c}%, ${d}%; \n}`);
  }
  function time() {
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }

  return (
    <div className="page-home">
      <div className="cont-first">
        <h1>Border-radius-generator</h1>
        <div style={borderStyle} className="molde-div"></div>
      </div>
      <div className="cont-second">
        <form onSubmit={handleFormValues}>
          <input
            value={a}
            onChange={(e) => setA(e.target.value)}
            onKeyDown={pressEnter}
            type="number"
          />
          <input
            value={b}
            onChange={(e) => setB(e.target.value)}
            onKeyDown={pressEnter}
            type="number"
          />
          <input
            value={c}
            onChange={(e) => setC(e.target.value)}
            onKeyDown={pressEnter}
            type="number"
          />
          <input
            value={d}
            onChange={(e) => setD(e.target.value)}
            onKeyDown={pressEnter}
            type="number"
          />
          <input type="submit" id="valueBtn" />
        </form>
        <div className="browser-model">
          <form onSubmit={handleFormValues}>
            <div className="header-browser">
              <div className="cir"></div>
              <div className="cir"></div>
              <div className="cir"></div>
            </div>
            <textarea
              spellCheck="false"
              id="styleText"
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div className="footer-browser">
              <CopyToClipboard text={message} onCopy={() => setCopied(true)}>
                <button type="submit">Copiar</button>
              </CopyToClipboard>
            </div>
          </form>
        </div>
        {copied ? (
          <div className="copied">
            <span>Copiado para área de transferencia! ^^</span>
          </div>
        ) : null}
        {copied ? time() : null}
      </div>
    </div>
  );
}

export default App;
