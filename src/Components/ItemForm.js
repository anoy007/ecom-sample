import React from "react";
import { useRef ,useState} from "react";
import "./ItemForm.css";
import Input from "../Shared/Input";

const ItemForm = (props) => {
  const amountRef = useRef();
  const [valid,setValid] = useState(true)
  const onSubmitHandler = (event) =>{
    event.preventDefault();
    const enterAmount = amountRef.current.value;
    const enterAmountInNumber = +enterAmount;

    if(enterAmountInNumber.length === 0 || enterAmountInNumber < 1||enterAmountInNumber > 5){
        setValid(false)
        return;  
    }

    props.onAddItem(enterAmountInNumber)
  }
  return (
    <form className={props.className ?  props.className : "form"} onSubmit={onSubmitHandler}>
      <button>+ Add</button>
      {!valid && <p>number must be (1-5)</p>}
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
    </form>
  );
};

export default ItemForm;
