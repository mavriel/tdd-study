import { Attendee } from './attendee';

export interface CheckedInAttendeeCounter {
  getCount: () => number;
  increment: () => void;
  countIfCheckedIn: (attendee: Attendee) => void;
}

export default function makeCheckedInAttendeeCounter(): CheckedInAttendeeCounter {
  let count = 0;

  function countIfCheckedIn(attendee: Attendee) {
    if (attendee.isCheckedIn()) {
      increment();
    }
  }

  function getCount() {
    return count;
  }

  function increment() {
    count++;
  }

  return {
    countIfCheckedIn,
    getCount,
    increment,
  };
}
