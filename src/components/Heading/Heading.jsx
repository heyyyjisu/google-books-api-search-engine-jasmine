import classes from "./Heading.module.scss";

function Heading() {
  return (
    <div className={classes.heading}>
      <h1>
        <span className={classes.line}>Search your</span>
        <span className={`${classes.line} ${classes.accent}`}>books!</span>
      </h1>
    </div>
  );
}

export default Heading;
