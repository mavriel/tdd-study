import { Attendee } from './attendee';

export interface CheckInRecorder {
  recordCheckIn: (attendee: Attendee) => void;
}

export default function checkInRecorder(): CheckInRecorder {
  return {
    recordCheckIn: attendee => attendee.checkIn(),
  };
}
