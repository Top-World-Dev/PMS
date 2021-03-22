import {Mongo} from "meteor/mongo";
import { TokenSchema } from "./schemas";

const tokens = new Mongo.Collection("tokens");

tokens.attachSchema(TokenSchema);

export default tokens;