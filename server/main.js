import { Meteor } from 'meteor/meteor';
import { Utilisateurs } from '../collections/utilisateurs'

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('utilisateurs', function() {
    return Utilisateurs.find({})
  })
});
