import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import { Chambers, Doctors } from "../../collections";
import * as _ from "underscore";

Meteor.methods({
    "doctors.insert"(payload) {
        // check(payload, {
        //     name: String,

        // });
        const errors = Doctors.simpleSchema()
        .namedContext()
        .validate(payload);

        console.log("Errors", errors);
        if(_.has(payload, "id")) {
            const doctor = {
                first_name: payload.first_name,
                last_name: payload.last_name,
                age: payload.age,
                title: payload.title,
                chamber: Chambers.findOne({_id: "JYBQJaczd5whmPCX2"})
            }
            Doctors.update({_id: payload.id}, {
                $set: doctor
            },{validate: true, upsert: true, new: true});
        }else {
            payload["chamber"] = Chambers.findOne({_id: "JYBQJaczd5whmPCX2"});
            return Doctors.insert(payload, {validate: true});
        }

        return false;
    },
    "doctors.delete"(payload) {
        // check(payload, {
        //     name: String,

        // });
        // const errors = Doctors.simpleSchema()
        // .namedContext()
        // .validate(payload);

        // console.log("Errors", errors);
        // if(_.has(payload, "id")) {
        //     const doctor = {
        //         first_name: payload.first_name,
        //         last_name: payload.last_name,
        //         age: payload.age,
        //         title: payload.title,
        //         chamber: Chambers.findOne({_id: "JYBQJaczd5whmPCX2"})
        //     }
        //     Doctors.update({_id: payload.id}, {
        //         $set: doctor
        //     },{validate: true, upsert: true, new: true});
        // }else {
        //     payload["chamber"] = Chambers.findOne({_id: "JYBQJaczd5whmPCX2"});
        //     return Doctors.insert(payload, {validate: true});
        // }

        Doctors.remove({_id: payload._id});

        return false;
    }
});