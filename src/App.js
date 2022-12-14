import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Title from "./components/Title";
import EventLIst from "./components/EventList";
import AddEventForm from "./components/AddEventForm";

function App() {
  const [events, setEvents] = useState([
    { title: "My birthday has passed", date: "", id: 1 },
    { title: "The traffic light turned red", date: "", id: 2 },
    { title: "The supermarket just opened", date: "", id: 3 },
    { title: "This game is over", date: "", id: 4 },
    { title: "A key has been pressed to play again", date: "", id: 5 },
  ]);
  const [showEvents, setShowEvents] = useState(true);
  const [showModal, setShowModal] = useState(true);

  const handleAddEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal((prevShowModal) => {
      return !prevShowModal;
    });
  };

  const handleDeleteClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((prevEvent) => {
        return id !== prevEvent.id;
      });
    });
  };

  const handleModalClose = (e) => {
    e.preventDefault();
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
      {showEvents && (
        <EventLIst events={events} handleClick={handleDeleteClick} />
      )}

      {events.length === 0 && showEvents && <p>No events to show!</p>}

      {showModal && (
        <Modal handleModalClose={handleModalClose}>
          <AddEventForm addEvent={handleAddEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
