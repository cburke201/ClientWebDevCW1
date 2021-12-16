const hostelsSchema = require('../models/hostelsModel');

exports.getHostels = async (req, res) => {
    try {
    
    const hostels = await hostelsSchema.find();

    res.json(hostels)

    } catch (error) {

    res.status(500).json({msg: 'server problem'})
    
    }
}

exports.addHostels = async (req,res) => {
    const {id,
        name,
        address,
        postcode,
        phone,
        email,
        description,
        location,
        ratings,
        reviews,} = req.body;
    try {

        
        const newHostels = new hostelsSchema({

            id: req.body.id,
            name: req.body.name,
            address: req.body.address,
            postcode: req.body.postcode,
            phone: req.body.phone,
            email: req.body.email,
            description: req.body.description,
            location: req.body.location,
            ratings: req.body.ratings,
            reviews: req.body.reviews,
        })

        await newHostels.save();
        res.json(newHostels);

    } catch (error) {

        res.status(500).json({msg: 'server problem'})

    }
}
exports.getHostelsId = async (req,res) => {
    
    const hostels = await hostelsSchema.findById(req.params.id)
    
    try {
        res.json(hostels)
    } catch(error) {
        res.status(500).json({msg: 'server problem'})
    }
}

exports.updateHostelsId = async (req, res) => {
        const {hostels} = req.body;

        try {
            const newHostels = await hostelsSchema.findByIdAndUpdate(req.params.id, {
                id: req.body.id,
                name: req.body.name,
                address: req.body.address,
                postcode: req.body.postcode,
                phone: req.body.phone,
                email: req.body.email,
                description: req.body.description,
                location: req.body.location,
                ratings: req.body.ratings,
                reviews: req.body.reviews,
            });

            let result = await newHostels.save();
            await result;
            res.json({msg: 'Item updated'});
        } catch (error) {
            res.status(500).json({msg: 'server problem'})
        }
    }

exports.deleteHostelsId = async (req,res) => {
        const hostels = await hostelsSchema.findByIdAndDelete(req.params.id)

        hostels;

        try {
            res.json({msg: "Item Deleted"})
        } catch (error) {
            res.status(500).json({msg: 'server problem'})
        }
    }