import React from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core'

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <ListItemText primary="Todo" secondary={props.text}/>
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
