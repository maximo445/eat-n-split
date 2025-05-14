import "./Button.css";

function Button({ children, click }) {
  return (
    <button onClick={click} className="button">
      {children}
    </button>
  );
}

export default Button;
