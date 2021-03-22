import {Meteor} from "meteor/meteor";
import { Doctors, Tokens } from "../../collections";

const getFirstHourOfToday = ()=> {
    const date = new Date();
    date.setHours(0,0,0,0);
    // date.setMinutes(0);
    // date.setSeconds(0);

    return new Date(date);
}

const getLastHourOfToday = ()=> {
    const date = new Date();
    date.setHours(11,59,59,59,59);
    // date.setMinutes(59);
    // date.setSeconds(59);
    return new Date(date);
}

Meteor.methods({
    "tokens.create"(payload) {
        const user = this.userId || "webuser";

        const errors = Tokens.simpleSchema()
        .namedContext()
        .validate(payload);

        console.log("Errors", errors);
        const query = {"doctor._id": payload.doctor, "patient_info.phone": payload.phone, schedule: {$gte: getFirstHourOfToday(), $lte: getLastHourOfToday()}};

        if(Tokens.find(query).count() === 0) {
            console.log("Inserting token");
            let insert = {
                patient_info: {
                    first_name: payload.first_name,
                    last_name: payload.last_name,
                    phone: payload.phone
                },
                doctor: Doctors.findOne({_id: payload.doctor}),
                schedule: new Date(payload.date),
                chamber: "JYBQJaczd5whmPCX2"
            };
            insert["created_at"] = new Date();
            insert["updated_at"] = new Date();
            insert["created_by"] = user;
    
            Tokens.insert(insert);
        }else {
            throw new Meteor.Error("You have already set an schedule with the doctor");
        }

        
    }
});