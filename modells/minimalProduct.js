import Joi from "joi";
import mongoose from "mongoose";


const minimalProductSchema = mongoose.Schema({
    minimalProductName: { type: String, required: true },
    description: String,
   minimalProductionDate : { type: Date, default: Date.now() },
   imgUrl : String
})

export const minimalProduct = mongoose.model("minimalProducts", minimalProductSchema);
export const minimalProductValidator = (_minimalProductToValidate) => {

    let minimalProductJoi = Joi.object({
        minimalProductName: Joi.string().min(5).max(20).required(),
        description: Joi.string(),
        minimalProductionDate : Joi.date(),
        imgUrl : Joi.string()
    })

    return minimalProductJoi.validate(_minimalProductToValidate);
}