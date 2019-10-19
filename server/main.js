import { Meteor } from 'meteor/meteor';
import { Utilisateurs } from '../collections/utilisateurs'
import { Patients } from '../collections/patients';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('utilisateurs', function() {
    return Utilisateurs.find({})
  })
  Meteor.publish('patients', function() {
    return Patients.find({})
  })
});
