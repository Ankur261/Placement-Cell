import mongoose from 'mongoose'

const resultSchema = mongoose.Schema(
    {
        interview: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Interviews',
            required: true
        },
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Students'
        },
        result: {
            type: String,
            enum: ['Pass', 'Fail', 'On Hold', 'Did not Attempt']
        }
    }
)