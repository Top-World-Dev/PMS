import {Mongo} from "meteor/mongo";
import { PatientSchema } from "./schemas";

const patients = new Mongo.Collection("patients");



patients.schema = PatientSchema;


export default patients;