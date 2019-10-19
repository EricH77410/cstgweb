import { Mongo } from 'meteor/mongo'

export const Patients = new Mongo.Collection('patients')

Meteor.methods({
  'patient.add': function() {

  },
  'patient.update': function() {
    
  }
})