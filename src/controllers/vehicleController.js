import Vehicle from "../models/vehicleModel.js"

export const store = async (req,res) => {
    try {
        const vehicle = await Vehicle.create(req.body)
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json("Não foi possivel adicionar")
    }
}

export const index = async (req,res) => {
    try {
        const vehicle = await Vehicle.find().exec()
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json("Não foi possivel mostrar os vehicles")
    }
}

export const update = async (req ,res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body).exec()
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json("Não foi possivel atualizar")
    }
}

export const destroy = async (req,res) => {
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id).exec()
        res.status(200).json(vehicle)
    } catch (error) {
        res.status(400).json("Não foi possivel deletar")
    }
}