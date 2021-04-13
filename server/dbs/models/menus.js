import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MenuSchema = new Schema({
  menu: {
    type: Array,
    require: true
  }
});
export default mongoose.model("Menu", MenuSchema);
