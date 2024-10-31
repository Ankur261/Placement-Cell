import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    batch: {
        type: String,
        required: true
    },
    placementStatus: {
        type: String,
        enum: ['Placed', 'Not Placed'],
        required: true
    },
    dsaScore: {
        type: Number,
        required: true,
    },
    webDScore: {
        type: Number,
        required: true,
    },
    reactScore: {
        type: Number,
        required: true
    }
}) ;

export const studentModel = mongoose.model('Students', studentSchema)