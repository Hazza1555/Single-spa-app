import { BehaviorSubject, skip } from "rxjs"


const registeredSubjects = [];

export const sendMessage = (message:string, key:string) => {
  const item = registeredSubjects.find(x => x.key === key)
  if (message) {
    item.subject.next(message)
  }
}

export const register = (key: string) => {
  const subject = new BehaviorSubject<string>("").pipe(skip(1))
  registeredSubjects.push({ key: key, subject: subject })
  return subject;
}


export const CustomButton = ({ message, appToSendTo, buttonText }) => {
  return <button onClick={() => sendMessage(message, appToSendTo)}>{buttonText}</button>
}