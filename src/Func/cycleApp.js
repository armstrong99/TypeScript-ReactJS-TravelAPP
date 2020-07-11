
/* globals localStorage */

// FEATURE 13. Provide default values
const STORAGE_KEY = 'cycleAppJulian'

// FEATURE 2. Add a trip

export class Trip { // eslint-disable-line no-unused-vars


constructor (newId, newDistance, newDestination, newSpeed, newCalories, newRoutes, newEstimateAchievetarget, newAverageSpeed, newFastestSpeed) {
    this.id = newId
	  this.distance = newDistance
    this.destination = newDestination
    this.speed = newSpeed
	this.calories = newCalories
	this.routes = newRoutes
	this.estimateAchievetarget = newEstimateAchievetarget
	this.averageSpeed = newAverageSpeed
	this.fastestSpeed = newFastestSpeed
	this.completed = false // FEATURE 13. Provide default values
  }
  }


export class cycleApp { // eslint-disable-line no-unused-vars
  constructor () {
    this.allMytrips = []
    // the following 3 attibutes are used to support editing a trip
    this.editedItem = null
    this.editedTripIndex = null
    this.beforeEditdestinationCache = ''
  }

  // FEATURE 15. Get all trip
  getAllTrips () {
    return this.allMytrips
  }

  // FEATURE 12. A calculation across many trips ! a weak example !
  // FEATURE 4. Filter trips
  getActivetrips () {
    return this.allMytrips.filter(trip => !trip.completed)
  }

  // FEATURE 12. A calculation across many trips ! a weak example !
  // FEATURE 4. Filter trips
  getCompletedtrips () {
    return this.allMytrips.filter(function (trip) {
      return trip.completed
    })
  }

  // FEATURE 7. Load all trips from LocalStorage
  load () {
    // FEATURE 13. Provide default values
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  }

  //  FEATURE 6. Save all trip to LocalStorage
  save () {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.allMytrips))
  }

  // FEATURE 2. Add a Trip
  addTrip (newDestination, newDistance, newSpeed) {
	  if (newDestination.trim()) {
		// FEATURE 13. Provide default values
		const newId = this.allMytrips.length + 1
		const aNewTrip = new Trip(newId, newDistance, newDestination, newSpeed)
		this.allMytrips.push(aNewTrip)
	  }
  }

  // FEATURE 12. A calculation across many trips
  remaining () {
    return this.getActivetrips().length
  }

  // FEATURE 12. A calculation across many trips
  getAllDone () {
    return this.remaining() === 0
  }

  setAllDone () {
    this.allMytrips.forEach(function (trip) {
      trip.completed = true
    })
  }

  // FEATURE 5. Delete a selected trip
  removeTrip (targetTripDestination) {
	const index = this.allMytrips.findIndex(trip => trip.destination === targetTripDestination)
    this.allMytrips.splice(index, 1)
  }

  // FEATURE 8. Update/edit a trip
  // copies the trip and destination 
  startEditing (trip) {
    this.beforeEditCache = trip.destination
    this.editedTrip = trip
  }

  // FEATURE 8. Update/edit a trip
  doneEditing (trip) {
    // FEATURE 10. Validate inputs
    if (!trip) {
      return
    }
    this.editedTrip = null
    trip.destination = trip.destination.trim()
    if (!trip.destination) {
      this.removeTrip(trip)
    }
  }

  // FEATURE 9. Discard /revert edits to a trip
  cancelEditing (trip) {
    this.editedTrip = null
    trip.destination = this.beforeEditCache
  }

  // FEATURE 5. Delete a selected trip
  removeCompleted () {
    this.allMytrips = this.getActivetrips ()
  }

  // FEATURE 3. Sort trips
  sorttrips () {
    this.allMytrips.sort(function (a, b) {
      if (a.destination < b.destination) {
        return -1
      }
      if (a.destination > b.destination) {
        return 1
      }
      // a must be equal to b
      return 0
    })
  }

  // FEATURE 14. Find a trip given a search criterion
  // NOTE: finds only FIRST match!
  findTrip (targetDestination) {
    return this.allMytrips.find((trip) => trip.destination === targetDestination)
  }
}


