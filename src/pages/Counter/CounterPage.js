import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./counter.css";
import { incrementCounter, decrementCounter, resetCounter } from "../../actions/Counter";
import { Link } from "react-router-dom";

const CounterPage = (props) => {
  const { incrementCounter, decrementCounter, resetCounter, counter } = props;
  return (
    <div className="counter-container">
      <div> A Simple Counter Example </div>
      <div className="counter-content">
        <div onClick={(e) => decrementCounter()} className="decrement">
          -
        </div>
        <div className="counter">{counter}</div>
        <div onClick={(e) => incrementCounter()} className="increment">
          +
        </div>
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center " }}>
        <div onClick={(e) => resetCounter()} className="reset">
          Reset
        </div>
        <Link to="/" className="reset">
          Home
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ incrementCounter, decrementCounter, resetCounter }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
