import { CheckInRecorder } from '../chapter05/checkInRecorder';
import { CheckInService } from '../chapter05/checkInService';

function checkInService(recorder: CheckInRecorder): CheckInService {
  return {
    checkIn: attendee => {
      attendee.checkIn();
      return recorder
        .recordCheckIn(attendee)
        .then(checkInNumber => attendee.setCheckInNumber(checkInNumber));
    },
  };
}

export default checkInService;
