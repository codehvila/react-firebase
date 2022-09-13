import { Fragment } from "react";

export default function EventLIst({ events, handleClick }) {
  return (
    <>
      {events.map((event, index) => (
        <Fragment key={event.id}>
          <p>
            {index}. {event.title}
          </p>
          <button onClick={() => handleClick(event.id)}>delete &uarr;</button>
        </Fragment>
      ))}
    </>
  );
}
