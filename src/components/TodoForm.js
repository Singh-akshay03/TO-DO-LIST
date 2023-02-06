import React, { useState, useContext } from "react";
import { FormGroup, Form } from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.type";

const TodoForm = () => {
    const [todoString, setTodoString]=useState('');
    const {dispatch} =useContext(TodoContext);

    const handleSubmit=e=>{
        e.preventDefault();
        if(todoString==="")
            return alert("please enter the todo");
        const todo={
            todoString,
            id:v4()
        }
        dispatch({
            type:ADD_TODO,
            payload:todo,
        });
        setTodoString("");
    }

  return (
    <Form>
      <FormGroup>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Type your next todo here"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={todoString}
            onChange={(e)=>setTodoString(e.target.value)}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
