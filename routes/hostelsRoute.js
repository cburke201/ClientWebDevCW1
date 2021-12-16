const {getHostels, updateHostelsId, getHostelsId, deleteHostelsId, addHostels} = require('../controllers/hostelsCtrl');

const router = require('express').Router()


// ........ Hostels .............

//get
router.get('/hostels', getHostels)

// add itinerary
router.post('/hostels', addHostels);

// get specific itinerary by id
router.get('/hostels/:id', getHostelsId);

// update specific itinerary by id
router.put('/hostels/update/:id', updateHostelsId)

// delete specific itinerary by id
router.delete('/hostels/:id', deleteHostelsId)


module.exports = router;