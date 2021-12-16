const itinerarySchema = require('../models/itineraryModel');

exports.getItinerary = async (req,res) => {
    try {

        const itinerary = await itinerarySchema.find();

        res.json(itinerary);
    
    } catch (error) {

        res.status(500).json({msg: 'server problem'})
        
    }

};

exports.addItinerary = async (req,res) => {
    const {id,
        user,
        startdate,
        stages,
            } = req.body;
    try {
        
        const newItinerary = new itinerarySchema({

            id: req.body.id,
            user: req.body.user,
            startdate: req.body.startdate,
            stages: req.body.stages,
            })

        await newItinerary.save();
        res.json(newItinerary);

    } catch (error) {

        res.status(500).json({msg: 'server problem'})
    
    }
};

exports.getItineraryId = async (req,res) => {
    
    try {
    const itinerary = await itinerarySchema.findById(req.params.id)
    
        res.json(itinerary)
    } catch (error) {
        res.status(500).json({msg: 'server problem'})
    }
};

exports.updateItineraryId = async (req, res) => {
     
    const {itinerary} = req.body;

    try {
        const newItinerary = await itinerarySchema.findByIdAndUpdate(req.params.id, {
            id: req.body.id,
            user: req.body.user,
            startdate: req.body.startdate,
            stages: req.body.stages,
           });

        let result = await newItinerary.save();
        await result;
        res.json({msg: 'Item updated'});
    } catch (error) {
        res.status(500).json({msg: 'server problem'})
    }
}

exports.deleteItineraryId = async (req,res) => {
   
    const itinerary = await itinerarySchema.findByIdAndDelete(req.params.id)

    itinerary;

    try {
        res.json({msg: "Item Deleted"})
    } catch (error) {
        res.status(500).json({msg: 'server problem'})
    }
}