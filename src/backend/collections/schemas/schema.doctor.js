import SimpleSchema from 'simpl-schema';
import ChamberSchema from './schema.chamber';

export default new SimpleSchema({
    _id: {
      type: String,
      optional: true
    },
    chamber: {
      type: ChamberSchema,
      required: false
    },
    first_name: {
        type: String,
        required: true,
        label: "doctor.first_name",
        max: 50
    },
    last_name: {
        type: String,
        required: true,
        label: "doctor.last_name",
        max: 50
    },
    title: {
        optional: true,
        type: String,
        label: "doctor.title"
    },
    age: {
      optional: true,
      type: Number,
      label: "doctor.age"
    },
    created_at: {
        type: Date,
        autoValue: function() {
          if (this.isInsert) {
            return new Date();
          } else if (this.isUpsert) {
            return {$setOnInsert: new Date()};
          } else {
            this.unset();
          }
        }
      },
      // Force value to be current date (on server) upon update
      // and don't allow it to be set upon insert.
      updated_at: {
        type: Date,
        autoValue: function() {
          if (this.isUpdate) {
            return new Date();
          }
        },
        optional: true
      }
});