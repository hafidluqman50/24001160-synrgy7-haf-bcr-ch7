
export class CarsAvailableDTO {
  public typeDriver: string
  public dateRent: string
  public timeRent: string
  public seat: number|null
  
  constructor(data: any) {
    this.typeDriver = data.type_driver
    this.dateRent   = data.date_rent
    this.timeRent   = data.time_rent
    this.seat       = data.seat
  }
}