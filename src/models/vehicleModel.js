import { Schema, model} from "mongoose"

const vehicleSchema = new Schema({
    plate: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintenences: {
        type: [Schema.Types.ObjectId],
        ref: 'Maintenence'
    }
})

export default model('Vehicle', vehicleSchema)