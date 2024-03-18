const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  revenue: { type: Number, required: true },
  phoneCityCode: { type: String, required: true },
  phoneNumber: { type: String, required: true }
});

// Export model
module.exports = mongoose.model("Company", CompanySchema)
