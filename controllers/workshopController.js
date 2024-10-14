import Workshop from "../models/workshopModel.js"

export const store = async (req,res) => {
    try {
        const workshop = await Workshop.create(req.body)
        res.status(200).json(workshop)
    } catch (error) {
        res.status(400).json("Não foi possivel adicionar")
    }
}

export const index = async (req,res) => {
    try {
        const workshop = await Workshop.find().exec()
        res.status(200).json(workshop)
    } catch (error) {
        res.status(400).json("Não foi possivel mostrar as workshops")
    }
}

export const update = async (req ,res) => {
    try {
        const workshop = await Workshop.findByIdAndUpdate(req.params.id, req.body).exec()
        res.status(200).json(workshop)
    } catch (error) {
        res.status(400).json("Não foi possivel atualizar")
    }
}

export const destroy = async (req,res) => {
    try {
        const workshop = await Workshop.findByIdAndDelete(req.params.id).exec()
        res.status(200).json(workshop)
    } catch (error) {
        res.status(400).json("Não foi possivel deletar")
    }
}