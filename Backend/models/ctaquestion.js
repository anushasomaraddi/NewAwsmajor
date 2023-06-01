var mongoose = require("mongoose");
var questionSchema = mongoose.Schema({
  quesid: {
    type: String,
    required: true,
  },
  questionId: {
    type: String,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("ctaquestion", questionSchema);
