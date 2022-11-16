import mongoose from "mongoose";
import crypto from "crypto";
import moment from "moment";

const specialistSchema = new mongoose.Schema(
  {
    specialist_id: { type: String, require: true, unique: true },
    department_id: { type: String, require: true },
    specialist_name: { type: String },
    // available_day: {type : String },
    // available_slot: [String],
    password: { type: String, require: true },
    image: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

specialistSchema.pre("save", function (next) {
  this.specialist_id =
    "SPE-" + crypto.pseudoRandomBytes(2).toString("hex").toUpperCase();
  next();
});

export default mongoose.model("specialist", specialistSchema);
