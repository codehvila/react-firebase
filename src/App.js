import { useState } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([
    { title: "My birthday has passed", id: 1 },
    { title: "The traffic light turned red", id: 2 },
    { title: "The supermarket just opened", id: 3 },
    { title: "This game is over", id: 4 },
    { title: "A key has been pressed to play again", id: 5 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((prevEvent) => {
        return id !== prevEvent.id;
      });
    });
  };

  return (
    <div className="App">
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.title}</p>
          <button onClick={() => handleClick(event.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
