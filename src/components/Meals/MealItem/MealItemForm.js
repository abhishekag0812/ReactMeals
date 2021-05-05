import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";
import React, { useRef, useState } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isValidAmount, setIsValidAmount] = useState(true);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // console.log(enteredAmount);
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValidAmount(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isValidAmount && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
  );
};

export default MealItemForm;
