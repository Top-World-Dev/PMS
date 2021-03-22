import {Meteor} from "meteor/meteor";
import { Chambers } from "../../collections";
import * as _ from "underscore";

Meteor.methods({
    "chambers.create"(payload) {
        //validate if user is logged in and has access
        const user_id = this.userId;

        console.log("Payloa", payload);
        if(_.has(payload, "_id")) {
            Chambers.update({_id: payload._id},
            {
                $set: {
                    name: payload.name
                }
            });
        }else {
            Chambers.insert({
                name: payload.name,
                created_by: user_id
            });
        }
        
    }
});