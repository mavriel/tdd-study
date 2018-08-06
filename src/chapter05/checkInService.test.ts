import makeAttendee, { Attendee } from './attendee';
import makeCheckInRecorder, { CheckInRecorder } from './checkInRecorder';
import makeCheckInService, { CheckInService } from './checkInService';

describe('checkInService', () => {
  let checkInService: CheckInService;
  let checkInRecorder: CheckInRecorder;
  let attendee: Attendee;

  beforeEach(() => {
    checkInRecorder = makeCheckInRecorder();
    jest.spyOn(checkInRecorder, 'recordCheckIn');
    checkInService = makeCheckInService(checkInRecorder);
    attendee = makeAttendee('석훈', '홍');
  });

  describe('checkIn(attendee)', () => {
    it('참가자를 체크인한 것으로 표시한다', () => {
      checkInService.checkIn(attendee);
      expect(attendee.isCheckedIn()).toBe(true);
    });
    it('체크인을 등록한다', () => {
      checkInService.checkIn(attendee);
      expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
    });
  });
});
