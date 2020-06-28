import React from "react";
import { Button, Badge } from "react-bootstrap";

const Counter = (props) => {
  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "Zero" : value;
  };

  // const getBadgeClasses = () => {
  //   const { value } = props.counter;
  //   return value === 0 ? "info" : "success";

  // };

  return (
    <div>
      <Badge variant="info">
        <span> {formatCount()}</span>
      </Badge>
      <Button
        className="m-2"
        variant="secondary"
        size="lg"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </Button>
      <Button
        variant="danger"
        size="lg"
        onClick={() => props.onDelete(props.counter.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Counter;
