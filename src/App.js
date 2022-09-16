import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Title from "./components/Title";
import EventLIst from "./components/EventList";

function App() {
  const [events, setEvents] = useState([
    { title: "My birthday has passed", id: 1 },
    { title: "The traffic light turned red", id: 2 },
    { title: "The supermarket just opened", id: 3 },
    { title: "This game is over", id: 4 },
    { title: "A key has been pressed to play again", id: 5 },
  ]);
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((prevEvent) => {
        return id !== prevEvent.id;
      });
    });
  };

  const handleModalClose = () => {
    setShowModal((prevShowModal) => {
      return !prevShowModal;
    });
  };

  const handleNewEventClick = () => {
    setShowModal((prevShowModal) => {
      return !prevShowModal;
    });
  };

  const title = "Events List";
  const subtitle = "Latest events for you";

  return (
    <div className="App">
      <Title title={title} subtitle={subtitle} />
      <div className="eventToolNavBar">
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>
            &oplus; Show Events
          </button>
        )}
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>
            &otimes; Hide Events
          </button>
        )}
        <button onClick={handleNewEventClick}> &#43; Add Event</button>
      </div>
      {showEvents && <EventLIst events={events} handleClick={handleClick} />}

      {events.length === 0 && showEvents && <p>No events to show!</p>}

      {showModal && (
        <Modal handleModalClose={handleModalClose}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nobis beatae, molestias earum iste aperiam, eligendi soluta iure
            unde porro recusandae laboriosam incidunt repellendus dignissimos in
            dicta, facilis mollitia consectetur.
          </p>
          <a href="/#">Find out more...</a>
        </Modal>
      )}
    </div>
  );
}

export default App;
