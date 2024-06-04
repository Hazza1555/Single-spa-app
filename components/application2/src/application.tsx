import React from 'react'
import { sendMessage, register } from "@verint/utility";
import { useEffect, useState } from "react";

export const Application = () => {
  const [messages, setMessages] = useState([])

  let nextId = 0;

  const subject = register("Application2")
  
  useEffect(() => {
    subject.subscribe(m => {
      setMessages(prevList => [...prevList, { id: nextId++, text: m }]);
    })
    return () => subject.unsubscribe();
  }, [])

  return (
    <div>
      <h1>Application 2</h1>
      <button onClick={() => sendMessage(`Message Sent To App 1: ${new Date(Date.now()).toUTCString()}`, "Application")}>Send message to app 1</button>
      <p>Message from App 1</p>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message?.text}</li>
        ))}
      </ul>
    </div>
  );
}
