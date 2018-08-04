export interface ReservationInfo {
  flightInformation: any;
  passengerInformation: any;
}

export const createReservation = (
  testPassenger: any,
  testFlight: any
): ReservationInfo => {
  return {
    flightInformation: testFlight,
    passengerInformation: testPassenger,
  };
};
