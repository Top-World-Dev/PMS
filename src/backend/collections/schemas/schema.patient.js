import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    _id: {
        type: String,
        optional: true
    },
    first_name: {
        type: String,
        required: true,
        label: "patient.first_name",
        max: 50
    },
    last_name: {
        type: String,
        required: true,
        label: "patient.last_name",
        max: 50
    },
    age: {
        type: Number,
        required: true
    }
});