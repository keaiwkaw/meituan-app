import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Category = new Schema({
  types: {
    type: Array,
    require: true
  },
  areas: {
    type: Array,
    require: true
  },
  city: {
    type: String
  }
});
export default mongoose.model("Category", Category,'category');
