import { Fragment, useState } from "react";
import "./App.css";
import Title from "./components/Title";

function App() {
  const [events, setEvents] = useState([
    { title: "My birthday has passed", id: 1 },
    { title: "The traffic light turned red", id: 2 },
    { title: "The supermarket just opened", id: 3 },
    { title: "This game is over", id: 4 },
    { title: "A key has been pressed to play again", id: 5 },
  ]);
  const [showEvents, setShowEvents] = useState(true);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((prevEvent) => {
        return id !== prevEvent.id;
      });
    });
  };

  const title = "Events List";
  const subtitle = "Latest events for you";

  return (
    <div className="App">
      <Title title={title} subtitle={subtitle} />
      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>&oplus; Show Events</button>
      )}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>
          &otimes; Hide Events
        </button>
      )}
      {showEvents &&
        events.map((event) => (
          <Fragment key={event.id}>
            <p>{event.title}</p>
            <button onClick={() => handleClick(event.id)}>delete &uarr;</button>
          </Fragment>
        ))}
      {events.length === 0 && showEvents && <p>No events to show!</p>}
    </div>
  );
}

export default App;
