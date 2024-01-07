import "./Button.css";


export const Button = ({ parentNode = "body", text = "Text here", bgColor = "white", textColor }) => {
  const Button = document.createElement("button");
  Button.classList.add("Button");
  Button.innerHTML = text;
  Button.style.backgroundColor = bgColor;
  Button.style.color = textColor;
  parentNode.appendChild(Button);
};