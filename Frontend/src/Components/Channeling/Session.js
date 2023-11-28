// Session.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Session.css';

const Session = () => {
  const navigate = useNavigate();
  const days = ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const startTime = '15:30';
  const sundayStartTime = '09:00';
  const sessionDuration = 20;
  const maxPatients = 7;
  const sundayMaxPatients = 6;

  const [selectedDay, setSelectedDay] = useState('Monday');

  const [sessions, setSessions] = useState(
    days.map((day) => {
      const isSunday = day === 'Sunday';
      const maxSundayPatients = isSunday ? sundayMaxPatients : maxPatients;

      return {
        day,
        appointments: Array.from({ length: maxSundayPatients }, (_, index) => {
          const appointmentTime = isSunday ? '09:00' : startTime;
          const appointmentId = `${day}-${appointmentTime}-${index + 1}`;

          return {
            id: appointmentId,
            time: appointmentTime,
            location: 'Negombo',
            status: 'available',
            appointmentNumber: index + 1,
            realData: '',
          };
        }),
      };
    })
  );

  function renderSessions(day) {
    const selectedDaySessions = sessions.find((session) => session.day === day);

    if (!selectedDaySessions) {
      return null;
    }

    return selectedDaySessions.appointments.map((appointment) => (
      <div key={appointment.id} className={`session-card ${appointment.status}`}>
        <p>Starting Time: {appointment.time}</p>
        <p>Location: {appointment.location}</p>
        <p>Session Duration: {sessionDuration} minutes</p>
        <button className="book-button" onClick={() => bookAppointment(appointment)}>
          Book Now
        </button>
      </div>
    ));
  }

  function bookAppointment(appointment) {
    const updatedSessions = sessions.map((session) => {
      if (session.day === selectedDay) {
        session.appointments = session.appointments.map((a) => {
          if (a.id === appointment.id) {
            return {
              ...a,
              status: 'booked',
              realData: '', // Set the real data here
            };
          }
          return a;
        });
      }
      return session;
    });

    setSessions(updatedSessions);
    navigate('/checkout');
  }

  return (
    <div className="session-container">
      <div className="day-selector">
        {days.map((day) => (
          <button
            key={day}
            className={day === selectedDay ? 'selected' : ''}
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      <h2 className="selected-day-heading">{`Selected Day: ${selectedDay}`}</h2>
      <div className="session-schedule">{renderSessions(selectedDay)}</div>
    </div>
  );
};

export default Session;
