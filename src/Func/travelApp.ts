const STORAGE_KEY: string = 'travelApp'

export class Trip {

  id: number
  stL: string
  endL: string
   cost: number
  completed: boolean

  constructor(newID:number, startLocation:string, endLocation:string,  costT:number) {
    this.id = newID
    this.stL = startLocation
    this.endL = endLocation
     this.cost = costT
    this.completed = false
  }


}

export class TravelApp {
  allTravels: any
  constructor() {

    this.allTravels = []

  }

  addTravel(stL:string, endL:string, cst:number) {
    const _id = this.allTravels.length + 1
    const aNewTravel = new Trip(_id, stL, endL, cst)
    this.allTravels.push(aNewTravel)
  }

  static getAllTravels() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '')
  }
  saveTravel() {
    if (localStorage.getItem(STORAGE_KEY)) {

      let currArr = JSON.parse(localStorage.getItem(STORAGE_KEY) || '') 
      
      currArr.push(this.allTravels[0])
      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currArr))


    }
     else localStorage.setItem(STORAGE_KEY, JSON.stringify(this.allTravels))
    }


}