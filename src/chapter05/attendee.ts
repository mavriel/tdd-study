export interface Attendee {
  checkIn: () => void;
  getFullName: () => string;
  isCheckedIn: () => boolean;
  setCheckInNumber: (num: number) => void;
  getCheckInNumber: () => number;
}

function attendee(firstName: string, lastName: string) {
  let checkedIn = false;
  const first = firstName || 'None';
  const last = lastName || 'None';
  let checkInNumber: number;

  return {
    checkIn() {
      checkedIn = true;
    },
    getFullName() {
      return `${first} ${last}`;
    },
    isCheckedIn() {
      return checkedIn;
    },
    setCheckInNumber(num: number) {
      checkInNumber = num;
    },
    getCheckInNumber() {
      return checkInNumber;
    },
  };
}

export default attendee;
