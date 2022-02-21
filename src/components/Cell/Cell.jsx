import styles from "./Cell.module.css";

const Cell = ({ color, h, v }) => {
  const cellColor = color === "w" ? styles.white : styles.black;
  return <div id={`${h} ${v}`} className={cellColor}></div>;
};

export default Cell;
