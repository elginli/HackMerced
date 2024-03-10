// Reminder.tsx

import React, { useState } from 'react';
import './Reminder.css';

interface ReminderItem {
  drugName: string;
  dosage: string;
  time: string;
  taken: boolean;
  id: number;
}

const Reminder: React.FC = () => {
  const [reminders, setReminders] = useState<ReminderItem[]>([]);
  const [newReminder, setNewReminder] = useState<ReminderItem>({
    drugName: '',
    dosage: '',
    time: '',
    taken: false,
    id: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReminder({
      ...newReminder,
      [name]: value,
    });
  };

  const saveRemindersToConsole = (updatedReminders: ReminderItem[]) => {
    console.log('Reminders:', JSON.stringify(updatedReminders, null, 2));
  };

  const addReminder = () => {
    if (newReminder.drugName && newReminder.dosage && newReminder.time) {
      setReminders((prevReminders) => {
        const updatedReminders = [...prevReminders, { ...newReminder, id: Date.now() }];
        // Log reminders to the console
        saveRemindersToConsole(updatedReminders);
        return updatedReminders;
      });

      setNewReminder({
        drugName: '',
        dosage: '',
        time: '',
        taken: false,
        id: 0,
      });
    } else {
      alert('Please fill in all fields before adding a reminder.');
    }
  };

  const handleCheckboxChange = (id: number) => {
    setReminders((prevReminders) => {
      const updatedReminders = prevReminders.map((reminder) =>
        reminder.id === id ? { ...reminder, taken: !reminder.taken } : reminder
      );

      // Log reminders to the console after checkbox change
      saveRemindersToConsole(updatedReminders);

      // Use 0 milliseconds to ensure the class is added in the next render cycle
      setTimeout(() => {
        const element = document.getElementById(`reminder-${id}`);
        if (element) {
          element.classList.add('fade-out');
          setTimeout(() => {
            setReminders((prevReminders) =>
              prevReminders.filter((reminder) => reminder.id !== id)
            );
          }, 500); // Adjust the timeout to match the transition duration
        }
      }, 0);

      return updatedReminders;
    });
  };

  return (
    <div className="Reminder">
      <h1>Medication Reminder</h1>
      <div>
        <label>Medication:</label>
        <input
          type="text"
          name="drugName"
          value={newReminder.drugName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Reminder Times:</label>
        <input
          type="text"
          name="dosage"
          value={newReminder.dosage}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Schedule:</label>
        <input
          type="text"
          name="time"
          value={newReminder.time}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={addReminder}>Add Reminder</button>

      <div>
        <h2>Reminders:</h2>
        {reminders.length === 0 ? (
          <p>No reminders left.</p>
        ) : (
          <ul>
            {reminders.map((reminder) => (
              <li
                key={reminder.id}
                id={`reminder-${reminder.id}`}
                className={reminder.taken ? 'taken' : ''}
              >
                <input
                  type="checkbox"
                  checked={reminder.taken}
                  onChange={() => handleCheckboxChange(reminder.id)}
                />
                {`Drug Name: ${reminder.drugName}, Dosage: ${reminder.dosage}, Time: ${reminder.time}`}
              </li>
            ))}
          </ul>
        )}
        {reminders.length > 0 && reminders.every((reminder) => reminder.taken) && (
          <p>No reminders left.</p>
        )}
      </div>
    </div>
  );
};

export default Reminder;
