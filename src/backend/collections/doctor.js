import {Mongo} from "meteor/mongo";
import {DoctorSchema} from "./schemas";

const doctors = new Mongo.Collection("doctors");

doctors.attachSchema(DoctorSchema);


export default doctors;