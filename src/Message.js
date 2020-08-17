import React, { forwardRef } from 'react'
import { Card, Typography, CardContent } from '@material-ui/core';
import "./Message.css"

const Message = forwardRef((props, ref)=> {
        const isUser = props.userName === props.message.userName;
        return (
            <div className={`message ${isUser && 'message_user'}`}>
            <Card className ={isUser? 'message__userCard': 'message__guestCard'}>
                <CardContent>
                    <Typography
                    color="white"
                    component="h5">
                        {!isUser && `${props.message.userName}:`} {props.message.text}
                    </Typography>
                </CardContent>
            </Card>
            </div>
        )
    }    
)
export default Message
