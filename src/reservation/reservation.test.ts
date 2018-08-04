import {createReservation, ReservationInfo} from './reservation';

describe('createReservation(passenger, flight)', () => {
  let testPassenger: any;
  let testFlight: any;
  let testReservation: ReservationInfo;

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
    testReservation = createReservation(testPassenger, testFlight);
  });

  it('주어진 passenger를 passengerInfo 프로퍼티에 할당한다.', () => {
    expect(testReservation.passengerInformation).toBe(testPassenger);
  });

  it('flight를 flightInfomaion 프로퍼티에 할당한다.', () => {
    expect(testReservation.flightInformation).toBe(testFlight);
  });
});
