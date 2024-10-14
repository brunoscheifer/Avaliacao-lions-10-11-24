import Maintenence from "../models/maintenanceModel.js"

export const store = async (req,res) => {
    try {
        const maintenence = await Maintenence.create(req.body)
        res.status(200).json(maintenence)
    } catch (error) {
        res.status(400).json("Não foi possivel adicionar")
    }
}

export const index = async (req,res) => {
    try {
        const maintenence = await Maintenence.find().exec()
        res.status(200).json(maintenence)
    } catch (error) {
        res.status(400).json("Não foi possivel mostrar as maintenences")
    }
}

export const update = async (req ,res) => {
    try {
        const maintenence = await Maintenence.findByIdAndUpdate(req.params.id, req.body).exec()
        res.status(200).json(maintenence)
    } catch (error) {
        res.status(400).json("Não foi possivel atualizar")
    }
}

export const destroy = async (req,res) => {
    try {
        const maintenence = await Maintenence.findByIdAndDelete(req.params.id).exec()
        res.status(200).json(maintenence)
    } catch (error) {
        res.status(400).json("Não foi possivel deletar")
    }
}