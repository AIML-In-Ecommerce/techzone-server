import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  dob: {
    type: String
  },
  avatar: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  address: [{
    receiverName: {
      type: String
    },
    address: {
      type: String
    },
    phoneNumber: {
      type: String
    }
  }],
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
