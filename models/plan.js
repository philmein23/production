const mongoose = require('mongoose');

var householdMemberSchema = new mongoose.Schema({
  relationship: String,
  firstName: String,
  lastName: String,
  email: String,
  primaryPhone: String,
  secondaryPhone: String,
  height: String,
  weight: String,
  picture: { data: Buffer, contentType: String },
  workSchoolName: String,
  streetAddress: String,
  streetAddressPt2: String,
  city: String,
  state: String,
  zip: Number,
  birthYear: Number
});

var iceSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  primaryPhone: String,
  secondaryPhone: String,
  streetAddress: String,
  streetAddressPt2: String,
  city: String,
  state: String,
  zip: Number
});

var planSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    memberID: String,
    primaryPhone: String,
    secondaryPhone: String,
    streetAddress: String,
    streetAddressPt2: String,
    city: String,
    state: String,
    zip: Number,
    reminderDate: { type: Date, default: Date() },
    reminderFrequency: { type: Number, default: 91 },
    householdMembers: [householdMemberSchema],
    ice: [iceSchema],
    rallyPoints: {
      immediate: String,
      rallyStreetAddress: String,
      rallyStreetAddressPt2: String,
      rallyCity: String,
      rallyState: String,
      rallyZip: Number
    },
    emergencykit: {
      location: String,
      water: { type: Boolean, required: true },
      food: { type: Boolean, required: true },
      noaaWeatherRadio: { type: Boolean, required: true },
      flashlight: { type: Boolean, required: true },
      extraBatteries: { type: Boolean, required: true },
      firstAidKit: { type: Boolean, required: true },
      whistle: { type: Boolean, required: true },
      dustMask: { type: Boolean, required: true },
      sheetingAndDuctTape: { type: Boolean, required: true },
      moistTowelettes: { type: Boolean, required: true },
      garbageBagsAndPlasticTies: { type: Boolean, required: true },
      wrenchOrPliers: { type: Boolean, required: true },
      canOpener: { type: Boolean, required: true },
      localMaps: { type: Boolean, required: true },
      kitReminderDate: Number
    }
  });


  module.exports = exports = mongoose.model('Plan', planSchema);
