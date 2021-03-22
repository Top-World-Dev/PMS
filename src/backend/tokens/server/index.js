import {Meteor} from "meteor/meteor";
import { Tokens } from "../../collections";

Meteor.publish("tokens.all", function(chamberId) {
    return Tokens.find({chamber: chamberId});
});