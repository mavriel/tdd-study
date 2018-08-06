import { createReservation, ReservationInfo } from './reservation';
// import * as ReservationSaver from './ReservationSaver';
import ReservationSaver from './ReservationSaver';

describe('createReservation(passenger, flight)', () => {
  let testPassenger: any;
  let testFlight: any;
  let testReservation: ReservationInfo;
  let testSaver: any;

  beforeEach(() => {
    testPassenger = {
      firstName: '윤지',
      lastName: '김',
    };
    testFlight = {
      carrier: '대한항공',
      destination: '울산',
      number: '344',
    };
    testSaver = new ReservationSaver();
    testReservation = createReservation(testPassenger, testFlight, testSaver);
  });

  it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다.', () => {
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });

  it('flight를 flightInfomaion 프로퍼티에 할당한다.', () => {
    expect(testReservation.flightInformation).toBe(testFlight);
  });

  it('예약정보를 저장한다', () => {
    const saver = new ReservationSaver();
    spyOn(saver, 'saveReservation');

    testReservation = createReservation(testPassenger, testFlight, saver);
    expect(saver.saveReservation).toHaveBeenCalled();
    expect(saver.saveReservation).lastCalledWith(testReservation);
  });
});
