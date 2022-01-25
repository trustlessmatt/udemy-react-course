import styles from "./Card.module.css";

const Card = (props) => {
  return (
    // template literal to always use card css but also append to it any passed class props
    <div className={`${styles.card} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
