import makeAttendee, { Attendee } from '../chapter05/attendee';
import makeCheckInRecorder, { CheckInRecorder } from '../chapter05/checkInRecorder';
import { CheckInService } from '../chapter05/checkInService';
import makeCheckInService from './checkInService';

describe('checkInService', () => {
  let checkInService: CheckInService;
  let checkInRecorder: CheckInRecorder;
  let attendee: Attendee;

  beforeEach(() => {
    checkInRecorder = makeCheckInRecorder();
    checkInService = makeCheckInService(checkInRecorder);
    attendee = makeAttendee('석훈', '홍');
  });

  describe('checkIn(attendee)', () => {
    describe('checkInRecorder 성공시', () => {
      const checkInNumber = 1234;
      let spy: jest.SpyInstance;

      beforeEach(() => {
        spy = jest.spyOn(checkInRecorder, 'recordCheckIn');
        spy.mockReturnValue(Promise.resolve(checkInNumber));
      });
      it('참가자를 체크한 것으로 표시한다', () => {
        checkInService.checkIn(attendee);
        expect(attendee.isCheckedIn()).toBe(true);
      });
      it('체크인을 등록한다', () => {
        checkInService.checkIn(attendee);
        expect(checkInRecorder.recordCheckIn).toHaveBeenCalledWith(attendee);
      });
      it('참가자의 checkInNumber를 지정한다.', () => {
        return checkInService.checkIn(attendee).then(() => {
          expect(attendee.getCheckInNumber()).toBe(checkInNumber);
        });
      });
    });
  });
});
