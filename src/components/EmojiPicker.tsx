import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [currentValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState<string>();
  const [previousValueFromCurrentRender, currenValueFromCurrentRender] =
    useState<string>();

  const handleAddSmiley = () => {
    queueRerenderWithNewCounterValue("😃");
  };
  const handleAddCrying = () => {
    queueRerenderWithNewCounterValue('😭');
  };
  const handleAddupsidedown = () => {
    queueRerenderWithNewCounterValue('🙃');
  };


  return (
    <>
      <h1>Emoji picker</h1>
      <p>Previous Emoji: {previousValueFromCurrentRender}</p> 
      <p>Current Emoji: {currentValueFromCurrentRender}</p>
      <button onClick={handleAddSmiley}>😃</button>
      <button onClick={handleAddCrying}>😭</button>
      <button onClick={handleAddupsidedown}>🙃</button>
      <hr />
      {/* <button onClick={handleStoreCurrentCount}>Store current count</button> */}
    </>
  );
}
