export interface ReservationInfo {
  flightInformation: any;
  passengerInformation: any;
}

export const createReservation = (
  testPassenger: any,
  testFlight: any,
  saver: any,
): ReservationInfo => {
  const reservation = {
    flightInformation: testFlight,
    passengerInformation: testPassenger,
  };

  saver.saveReservation(reservation);
  return reservation;
};
