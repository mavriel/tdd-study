export interface Attendee {
  checkIn: () => void;
  getFullName: () => string;
  isCheckedIn: () => boolean;
}

function attendee(firstName: string, lastName: string) {
  let checkedIn = false;
  const first = firstName || 'None';
  const last = lastName || 'None';

  return {
    checkIn: function checkIn() {
      checkedIn = true;
    },
    getFullName: function getFullName() {
      return `${first} ${last}`;
    },
    isCheckedIn: function isCheckdIn() {
      return checkedIn;
    },
  };
}

export default attendee;
