import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Event {
  _id: string;
  title: string;
  date: string;
  location: string;
}

function EventList() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventList;