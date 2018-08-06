import { ReservationInfo } from './reservation';

class ReservationSaver {
  private name = 'saver';

  public saveReservation(info: ReservationInfo) {
    console.log(this.name);
  }
}

export default ReservationSaver;
