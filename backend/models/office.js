const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OfficeSchema = new Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  startDate: { type: String, required: true },
  companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true }
});

// Export model
module.exports = mongoose.model("Office", OfficeSchema)
