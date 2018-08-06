import makeAttendee, { Attendee } from './attendee';
import makeCheckedInAttendeeCounter, {
  CheckedInAttendeeCounter,
} from './checkedInAttendeeCounter';

// tslint:disable:only-arrow-functions

describe('checkedInAttendeeCounter', function() {
  let counter: CheckedInAttendeeCounter;

  beforeEach(function() {
    counter = makeCheckedInAttendeeCounter();
  });
  it('increment()/getCount()', function() {
    expect(counter.getCount()).toBe(0);
    counter.increment();
    expect(counter.getCount()).toBe(1);
    counter.increment();
    expect(counter.getCount()).toBe(2);
  });
  describe('countIfCheckedIn(attendee)', function() {
    let attendee: Attendee;
    beforeEach(function() {
      attendee = makeAttendee('석훈', '홍');
    });

    it('참가자가 체크인을 하지 않으면 인원수를 세지 않는다', function() {
      counter.countIfCheckedIn(attendee);
      expect(counter.getCount()).toBe(0);
    });

    it('참가자가 체크인을 하면 인원수를 센다', function() {
      attendee.checkIn();
      counter.countIfCheckedIn(attendee);
      expect(counter.getCount()).toBe(1);
    });
  });
});
