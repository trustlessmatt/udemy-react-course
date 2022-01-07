import "./Card.css";

const Card = (props) => {
    // combining imported card css class with 
    // other classNames held by the children
    const classes = 'card ' + props.className;

    // we apply the css classes for this custom Card object 
    // plus any classes applied to its children
    return <div className={classes}>{props.children}</div>;
}

export default Card;
