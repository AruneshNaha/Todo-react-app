import React, { useContext, useState } from "react"
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"
import { v4 } from 'uuid'
import { TodoContext } from "../Context/TodoContext"
import { ADD_TODO } from "../Context/action.types"

const TodoForm = () => {
    const [todostring, setTodostring] = useState("")
    const { dispatch } = useContext(TodoContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (todostring === "")//empty
        {
            return alert("Please enter a todo")
        }

        const todo = {
            todostring,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })

        setTodostring("")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Your todo" value={todostring}
                        onChange={e => setTodostring(e.target.value)}
                    >
                    </Input>
                    <InputGroupAddon><Button color="warning">Add</Button></InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm