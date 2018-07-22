const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  team: {
    type: String
  },
  website: {
    type: String
  },
  location: {
    type: String
  },
  status: {
    type: String,
    required: true
  },
  games: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      team: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    twitch: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    defualt: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
