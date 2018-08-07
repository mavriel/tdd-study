import { Attendee } from './attendee';
import { CheckInRecorder } from './checkInRecorder';

export interface CheckInService {
  checkIn: (attendee: Attendee) => Promise<any>;
}

export default function checkInService(
  checkInRecorder: CheckInRecorder,
): CheckInService {
  return {
    checkIn: attendee => checkInRecorder.recordCheckIn(attendee),
  };
}
