import React, { useState } from 'react';
import './ChatInput.css';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import './ChatInput.css';


function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            db
                .collection('rooms')
                .doc(channelId)
                .collection('messages')
                .add({
                    message: input,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    user: user.displayName,
                    userimage: user.photoURL
                })

            setInput('');
        }
    }

    return (
        <form>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={`Message to #${channelName?.toLowerCase()}`}
            />
            <Button
                type="submit"
                onClick={sendMessage}>
                SEND
                </Button>
        </form>
    )
}

export default ChatInput
