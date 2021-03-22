import SimpleSchema from 'simpl-schema';

export default new SimpleSchema({
    _id: {
        type: String,
        optional: true
    },
    name: {
        type: String,
        required: true
    },
    created_by: {
        type: String,
        required: true
    },
    // created_at: {
    //     type: Date,
    //     autoValue: function() {
    //       if (this.isInsert) {
    //         return new Date();
    //       } else if (this.isUpsert) {
    //         return {$setOnInsert: new Date()};
    //       } else {
    //         this.unset();
    //       }
    //     }
    // },
    updated_at: {
        type: Date,
        autoValue: function() {
            return new Date();
        },
        optional: true
    }
});