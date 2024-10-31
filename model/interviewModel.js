import mongoose from 'mongoose'

const interviewSchema = mongoose.Schema(
    {
        companyName : {
            type: String,
            require: true,
            
        },
        interviewDate: {
            type : Date,
            require: true
        },
    }
)

export const interviewModel = mongoose.model('Interviews', interviewSchema)