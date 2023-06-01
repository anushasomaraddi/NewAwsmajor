var mongoose = require("mongoose");
var quesSchema = mongoose.Schema({
  quesname: {
    type: String,
    required: true,
  },
  quesdescription: {
    type: String,
    required: true,
  },
  upload: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: String,
  },
  owneremail: {
    type: String,
  },
});
module.exports = mongoose.model("ctadescription", quesSchema);
