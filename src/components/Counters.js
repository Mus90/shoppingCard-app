import React from "react";
import Counter from "./Counter";

const Counters = (props) => {
  return (
    <div>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          counter={counter}
        />
      ))}
    </div>
  );
};

export default Counters;
