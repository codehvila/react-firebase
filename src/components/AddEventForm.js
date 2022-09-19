import { useState } from "react";
import styles from "./AddEventForm.module.css";

function AddEventForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  // const [event, setEvent] = useState({ title: "", date: "", id: null });

  const handleAddEventSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 100000000),
    };

    addEvent(event);
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
  };

  return (
    <div className={styles.AddEventForm}>
      <h2>Add a New Event</h2>
      <form className={styles.addEventForm} onSubmit={handleAddEventSubmit}>
        <label>
          <span>Title</span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
          ></input>
        </label>
        <label>
          <span>Date</span>
          <input
            onChange={(e) => setDate(e.target.value)}
            type="date"
            value={date}
          ></input>
        </label>
        <button>Add Event</button>

        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
}

export default AddEventForm;
