import React from 'react'
import { sendMessage, register } from "@verint/utility";
import { useEffect, useState } from "react";

export const Application = () => {
  const [messages, setMessages] = useState([])

  let nextId = 0;

  const subject = register("Application")
  
  useEffect(() => {
    subject.subscribe(m => {
      setMessages(prevList => [...prevList, { id: nextId++, text: m }]);
    })
    return () => subject.unsubscribe();
  }, [])

  return (
    <div>
      <h1>Application 1</h1>
      <button onClick={() => sendMessage(`Message Sent To App2: ${new Date(Date.now()).toUTCString()}`, "Application2")}>Send message to app 2</button>
      <p>Message from App 2</p>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message?.text}</li>
        ))}
      </ul>
    </div>
  );
}
