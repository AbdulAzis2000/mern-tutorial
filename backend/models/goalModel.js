const mongoose = require('mongoose')
const mongoose = require("mongoose");
const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, 'Please add a text value']
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Users",
    },
    text: {
        type: String,
        required: [true, "Please add a text value"],
      },
    },
    {
        timestamps: true,
      timestamps: true,
    }
)
  );

module.exports = mongoose.model('Goals', goalSchema) 
  module.exports = mongoose.model("Goals", goalSchema); 