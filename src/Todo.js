import React from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core'
import { Button } from '@material-ui/core'
import db from './firebase'

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Todo ⏰"/>
                </ListItem>
            </List>
            {console.log("from todos",props.todo.todo)}
            <Button onClick={event=>db.collection('todos').doc(props.todo.id).delete()}>Delete Me</Button>
        </div>
    )
}

export default Todo
