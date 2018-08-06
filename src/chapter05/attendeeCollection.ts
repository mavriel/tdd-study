import { Attendee } from './attendee';

export interface AttendeeCollection {
  contains(attendee: Attendee): boolean;

  add(attendee: Attendee): void;

  remove(attendee: Attendee): void;

  iterate(callback: any): void;
}

function attendeeCollection(): AttendeeCollection {
  const attendees: Attendee[] = [];

  function contains(attendee: Attendee) {
    return attendees.indexOf(attendee) > -1;
  }

  function add(attendee: Attendee) {
    if (!contains(attendee)) {
      attendees.push(attendee);
    }
  }

  function remove(attendee: Attendee) {
    const index = attendees.indexOf(attendee);
    if (index > -1) {
      attendees.splice(index, 1);
    }
  }

  function iterate(callback: (attendee: Attendee) => void) {
    attendees.forEach(callback);
  }

  return {
    add,
    contains,
    iterate,
    remove,
  };
}

export default attendeeCollection;
