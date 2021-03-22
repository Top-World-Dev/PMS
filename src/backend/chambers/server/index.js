import {Meteor} from "meteor/meteor";
import { Chambers } from "../../collections";

Meteor.publish("chambers.all", function() {

    return Chambers.find({created_by: this.userId});
});