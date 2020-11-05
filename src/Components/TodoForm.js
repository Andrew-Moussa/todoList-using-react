import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    })


    const handelChange = e => {
        setInput(e.target.value);
    };

    const handelSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    };


    return (
        <form className="todo-form" onSubmit={handelSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="update your item"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handelChange}
                        ref={inputRef}
                    />
                    <button className="todo-button edit">update</button>
                </>
            ) :
                (
                    <>
                        <input
                            type="text"
                            placeholder="Add a todo"
                            value={input}
                            name="text"
                            className="todo-input"
                            onChange={handelChange}
                            ref={inputRef}
                        />
                        <button className="todo-button">Add todo</button>

                    </>
                )
            }

        </form>
    );
}

export default TodoForm;
