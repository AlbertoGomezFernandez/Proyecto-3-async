import "./Button.css";


export const Button = ({ parentNode = "body", className, text = "Text here", bgColor = "white", textColor }) => {
  const Button = document.createElement("button");
  Button.className = className;
  Button.classList.add("button");
  Button.innerHTML = text;
  Button.style.backgroundColor = bgColor;
  Button.style.color = textColor;
  parentNode.appendChild(Button);
};