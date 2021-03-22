import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import { TestCollection } from "../test";
Meteor.methods({
    "test.store"(payload) {
        check(payload, {
            title: String
        });

        return TestCollection.insert({
            title: payload.title,
            created_at: new Date()
        });
    }
});