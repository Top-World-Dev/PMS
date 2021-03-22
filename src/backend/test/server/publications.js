import {Meteor} from "meteor/meteor";
import { TestCollection } from "../test";

Meteor.publish({
    "testdata.publish"() {
        return TestCollection.find({}, {sort: {created_at: -1}});
    }
});