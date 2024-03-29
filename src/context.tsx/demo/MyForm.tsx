import React, { ReactNode, useState } from 'react';
import { UpliftingContext, useUpliftingMessage } from './context';
type prop={
    children:ReactNode,
}
const UpliftingProvider: React.FC<prop> = (props) => {
  const upliftingMessage = "You are capable of amazing things! Keep going! 🚀";
  const [message, setMessage] = useState(upliftingMessage);

  const updateMessage = (newMessage: string) => {
    setMessage(newMessage);
  };

  return (
    <UpliftingContext.Provider value={{ message, updateMessage }}>
      {props.children}
    </UpliftingContext.Provider>
  );
};

// A custom hook to access the uplifting message and update function


// A component to display the uplifting message and update it
const UpliftingMessageDisplay: React.FC = () => {
  const { message, updateMessage } = useUpliftingMessage();
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const handleUpdateClick = () => {
    updateMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <div>
      <p>{message}</p>
      <input type="text" value={inputMessage} onChange={handleInputChange} />
      <button onClick={handleUpdateClick}>Change Message</button>
    </div>
  );
};

// Main component to render the provider and the message display
const Forms: React.FC = () => {
  return (
    <UpliftingProvider key={2}>
      <div>
        <h1>Uplifting Message</h1>
        <UpliftingMessageDisplay />
      </div>
    </UpliftingProvider>
  );
};

export default Forms;
