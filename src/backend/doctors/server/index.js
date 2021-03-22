import {Meteor} from "meteor/meteor";
import { Doctors } from "../../collections";

Meteor.publish("doctors.all", function() {
    return Doctors.find({});
});