import {Mongo} from "meteor/mongo";
import {ChamberSchema} from "./schemas";

const chambers = new Mongo.Collection("chambers");

chambers.attachSchema(ChamberSchema);

export default chambers;