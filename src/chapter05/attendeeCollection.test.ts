import attendee, { Attendee } from './attendee';
import attendeeCollection, { AttendeeCollection } from './attendeeCollection';

describe('attendeeCollection', () => {
  let testAttendee: Attendee;
  let testAttendeeCollection: AttendeeCollection;

  beforeEach(() => {
    testAttendee = attendee('sukhoon', 'hong');
    testAttendeeCollection = attendeeCollection();
  });

  it('contains(attendee) / add(attendee)', () => {
    testAttendeeCollection.add(testAttendee);
    expect(testAttendeeCollection.contains(testAttendee)).toEqual(true);
    expect(testAttendeeCollection.contains(attendee('1', '2'))).toEqual(false);
  });

  it('remove(attendee', () => {
    testAttendeeCollection.add(testAttendee);
    expect(testAttendeeCollection.contains(testAttendee)).toEqual(true);
    testAttendeeCollection.remove(testAttendee);
    expect(testAttendeeCollection.contains(testAttendee)).toEqual(false);
  });

  describe('iterate(callback)', () => {
    let collection: AttendeeCollection;
    const callbackSpy = jest.fn();

    function addAttendeesToCollection(attendeeArray: Attendee[]) {
      attendeeArray.forEach(item => collection.add(item));
    }

    function verifyCallbackWasExecutedForEachAttendee(attendeeArray: Attendee[]) {
      expect(callbackSpy.mock.calls.length).toBe(attendeeArray.length);
      callbackSpy.mock.calls.forEach((args, idx) => {
        expect(args[0]).toBe(attendeeArray[idx]);
      });
    }

    beforeEach(() => {
      collection = attendeeCollection();
      callbackSpy.mockReset();
    });

    it('빈 컬렉션에서는 콜백을 실행하지 않는다.', () => {
      collection.iterate(callbackSpy);
      expect(callbackSpy).not.toHaveBeenCalled();
    });

    it('원소가 하나뿐인 컬렉션은 콜백을 한 번만 실행한다.', () => {
      const attendees = [attendee('윤지', '김')];
      addAttendeesToCollection(attendees);
      collection.iterate(callbackSpy);
      verifyCallbackWasExecutedForEachAttendee(attendees);
    });

    it('컬렉션 원소마다 한 번씩 콜백을 실행한다.', () => {
      const attendees = [
        attendee('석훈', '홍'),
        attendee('지영', '차'),
        attendee('지훈', '홍'),
        attendee('지우', '홍'),
      ];
      addAttendeesToCollection(attendees);
      collection.iterate(callbackSpy);
      verifyCallbackWasExecutedForEachAttendee(attendees);
    });
  });
});
