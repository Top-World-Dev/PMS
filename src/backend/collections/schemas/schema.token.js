import SimpleSchema from 'simpl-schema';
import DoctorSchema from "./schema.doctor";


const PatientInfoSchema = new SimpleSchema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
})

export default new SimpleSchema({
    _id: {
        type: String,
        optional: true
    },
    patient_info: {
        type: PatientInfoSchema,
        required: true
    },
    schedule: {
        type: Date,
        required: true
    },
    doctor: DoctorSchema,
    created_at: {
        type: Date,
        optional: true
    },
    updated_at: {
        type: Date,
        optional: true
    },
    created_by: {
        type: String,
        required: true
    },
    chamber: {
        type: String,
        required: true
    }
});