import { Fragment, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
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

      {/* <Modal>
        <h2>Nicolas, You Just Logged Out</h2>
        <p>Come back soon!</p>
      </Modal> */}
      <Modal modalIsOpen={true}>
        <h2>Terms and Conditions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis
          beatae, molestias earum iste aperiam, eligendi soluta iure unde porro
          recusandae laboriosam incidunt repellendus dignissimos in dicta,
          facilis mollitia consectetur.
        </p>
        <a href="/#">Find out more...</a>
      </Modal>
    </div>
  );
}

export default App;
