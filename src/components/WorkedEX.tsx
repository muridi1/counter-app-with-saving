import { useState } from "react";
export default function WorkedEX(): JSX.Element {
  const [currentEmoji, setCurrentEmoji] = useState("");
  const [previousEmoji, setPreviousEmoji] = useState<string[]>([]);
  const handleSmileyEmoji = () => {
    setCurrentEmoji("😀");
  };
  const handleTurkey = () => {
    setCurrentEmoji("🇹🇷");
  };
  const handleSweden = () => {
    setCurrentEmoji("🇸🇪");
  };
  const handleMalaysiaEmoji = () => {
    setCurrentEmoji("🇲🇾");
  };
  const handlePhoneEmoji = () => {
    setCurrentEmoji("📱");
  };
  const handleStorePrevious = () => {
    setPreviousEmoji((prevStoredEmojis) => [...prevStoredEmojis, currentEmoji]);
  };
  return (
    <>
      <h1>Emoji Picker</h1>
      <p>
        Previous Emojis:
        {previousEmoji.slice(-5).map((emojiArr, index) => (
          <li key={index}>{emojiArr}</li>
        ))}
      </p>
      <p>Chosen Emoji: {currentEmoji}</p>
      <div onClick={handleStorePrevious}>
        <button onClick={handleSmileyEmoji}>😀</button>
        <button onClick={handleTurkey}>🇹🇷</button>
        <button onClick={handleSweden}>🇸🇪</button>
        <button onClick={handleMalaysiaEmoji}>🇲🇾</button>
        <button onClick={handlePhoneEmoji}>📱</button>
      </div>
    </>
  );
}





