import React from 'react'
import { sendMessage, register, CustomButton } from "@verint/utility";
import { useEffect, useState } from "react";


interface MessageObject {
  id: number,
  text: string
}

export const Application = () => {
  const [messages, setMessages] = useState<MessageObject[]>([])

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
      <CustomButton message={`Message Sent To App 2: ${new Date(Date.now()).toUTCString()}`} appToSendTo={"Application2"} buttonText={"Send Message to Application 2"} />
      <p>Message from App 2</p>
      <ul>
        {messages.map(message => (
          <li key={message.id}>{message?.text}</li>
        ))}
      </ul>
    </div>
  );
}
