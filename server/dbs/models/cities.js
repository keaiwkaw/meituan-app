import mongoose from 'mongoose'
const Schema = mongoose.Schema
const CitySchema = new Schema({
  id: {
    type: String,
    require: true
  },
  value: {
    type: Array,
    require: true
  }
});
export default mongoose.model("City", CitySchema);
