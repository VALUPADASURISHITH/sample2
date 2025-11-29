import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "C", "+",
    "="
  ];

  function handleClick(value) {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        // evaluate the expression safely
        // eslint-disable-next-line no-eval
        const result = eval(input);
        setInput(String(result));
      } catch (e) {
        setInput("Error");
      }
    } else {
      // if "Error" is on screen, replace it
      if (input === "Error") setInput(value);
      else setInput(input + value);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f4f6"
      }}
    >
      <div
        style={{
          width: "260px",
          padding: "16px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          background: "white"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "12px" }}>Calculator</h2>

        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "18px",
            textAlign: "right",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb"
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "8px"
          }}
        >
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              style={{
                padding: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                background:
                  btn === "="
                    ? "#4f46e5"
                    : btn === "C"
                    ? "#ef4444"
                    : "#e5e7eb",
                color: btn === "=" || btn === "C" ? "white" : "black",
                fontWeight: btn === "=" ? "bold" : "normal"
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
