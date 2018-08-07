import { Attendee } from './attendee';

export interface CheckInRecorder {
  recordCheckIn: (attendee: Attendee) => Promise<number>;
}

export default function checkInRecorder(): CheckInRecorder {
  return {
    recordCheckIn: attendee => {
      attendee.checkIn();
      return Promise.resolve(999);
    },
  };
}
