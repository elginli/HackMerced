import React, { useState, useEffect } from 'react';
import './Reminder.css';

interface ReminderItem {
  drugName: string;
  dosage: string;
  times: string[];
  days: string[];
  startDate: string;
  endDate: string;
  taken: boolean;
  id: number;
}

const Reminder: React.FC = () => {
  const [reminders, setReminders] = useState<ReminderItem[]>([]);
  const [newReminder, setNewReminder] = useState<ReminderItem>({
    drugName: '',
    dosage: '',
    times: [],
    days: [],
    startDate: '',
    endDate: '',
    taken: false,
    id: 0,
  });
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReminder({
      ...newReminder,
      [name]: value,
    });
  };

  const handleTimesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewReminder({
      ...newReminder,
      [name]: value.split(',').map((time) => time.trim()),
    });
  };

  const handleDaysChange = (day: string) => {
    setNewReminder((prevReminder) => {
      const updatedDays = prevReminder.days.includes(day)
        ? prevReminder.days.filter((d) => d !== day)
        : [...prevReminder.days, day];

      return {
        ...prevReminder,
        days: updatedDays,
      };
    });
  };

  const getCurrentDay = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();
    return daysOfWeek[today];
  };

  const saveRemindersToConsole = (updatedReminders: ReminderItem[]) => {
    console.log('Reminders:', JSON.stringify(updatedReminders, null, 2));
  };

  const addReminder = () => {
    const startDate = new Date(newReminder.startDate);
    const endDate = new Date(newReminder.endDate);

    if (
      newReminder.drugName &&
      newReminder.dosage &&
      newReminder.times.length > 0 &&
      newReminder.days.length > 0 &&
      startDate <= endDate
    ) {
      setReminders((prevReminders) => {
        const updatedReminders = [...prevReminders, { ...newReminder, id: Date.now() }];
        saveRemindersToConsole(updatedReminders);
        return updatedReminders;
      });

      setNewReminder({
        drugName: '',
        dosage: '',
        times: [],
        days: [],
        startDate: '',
        endDate: '',
        taken: false,
        id: 0,
      });
    } else {
      alert('Please fill in all fields correctly before adding a reminder.');
    }
  };

  const handleCheckboxChange = (id: number) => {
    setReminders((prevReminders) => {
      const updatedReminders = prevReminders.map((reminder) =>
        reminder.id === id ? { ...reminder, taken: !reminder.taken } : reminder
      );

      saveRemindersToConsole(updatedReminders);

      setTimeout(() => {
        const element = document.getElementById(`reminder-${id}`);
        if (element) {
          element.classList.add('fade-out');
          setTimeout(() => {
            setReminders((prevReminders) =>
              prevReminders.filter((reminder) => reminder.id !== id)
            );
          }, 500);
        }
      }, 0);

      return updatedReminders;
    });
  };

  useEffect(() => {
    // Simulate a condition to show the dropdown (replace this with your actual condition)
    const conditionToDisplayDropdown = reminders.length > 0 && reminders[0].taken;

    setDropdownOpen(conditionToDisplayDropdown);
  }, [reminders]);

  return (
    <div className="Reminder">
      <button className="dropdown-btn" onClick={() => setDropdownOpen(!isDropdownOpen)}>
        Enter Medication
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <h1></h1>
          <div>
            <label>Medication:</label>
            <input
              type="text"
              name="drugName"
              placeholder="Enter name of medication"
              value={newReminder.drugName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Dosage:</label>
            <input
              type="text"
              name="dosage"
              placeholder="Enter milligrams"
              value={newReminder.dosage}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Reminder Times:</label>
            <input
              type="text"
              name="times"
              placeholder="Enter comma-separated times"
              value={newReminder.times.join(', ')}
              onChange={handleTimesChange}
            />
          </div>
          <div className="days-section">
            <label></label>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={newReminder.days.includes(day)}
                  onChange={() => handleDaysChange(day)}
                />
                {day}
              </label>
            ))}
          </div>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={newReminder.startDate}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={newReminder.endDate}
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
                    {`Drug Name: ${reminder.drugName}, Dosage: ${reminder.dosage}, Times: ${reminder.times.join(
                      ', '
                    )}, Days: ${reminder.days.join(', ')}, Start Date: ${reminder.startDate}, End Date: ${reminder.endDate}`}
                  </li>
                ))}
              </ul>
            )}
            {reminders.length > 0 && reminders.every((reminder) => reminder.taken) && (
              <p>No reminders left.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Reminder;
