
const router = require('express').Router()
const {getItinerary, updateItineraryId, getItineraryId, deleteItineraryId, addItinerary} = require('../controllers/itineraryCtrl');

// ........ Itinerary .............

//get
router.get('/itinerary', getItinerary);

// add itinerary
router.post('/itinerary', addItinerary);

// get specific itinerary by id
router.get('/itinerary/:id', getItineraryId);

// update specific itinerary by id
router.put('/itinerary/update/:id', updateItineraryId)

// delete specific itinerary by id
router.delete('/itinerary/:id', deleteItineraryId)


module.exports = router;