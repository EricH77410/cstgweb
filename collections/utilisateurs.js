import { Mongo } from 'meteor/mongo'

export const Utilisateurs = new Mongo.Collection('utilisateurs')

Meteor.methods({
  'utilisateurs.add': function(data) {

  },
  'utilisateurs.update': function(id,data) {

  },
})