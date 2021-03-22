import { Meteor } from 'meteor/meteor';
import { TestCollection } from './backend/test/test';

Meteor.startup(() => {
  
  if(TestCollection.find().fetch().length === 0) {
    const data = [
      {title: "I am a sample data", created_at: new Date()}
    ];

    data.forEach((item)=>TestCollection.insert(item));

    
  }

  console.log("Checking if super user exists", Meteor.users.find().fetch().length );
    if(Meteor.users.find().fetch().length === 0) {
      console.log("Inserting super user");
      const userId = Accounts.createUser({
          username: "superuser",
          email: "superuser@pms.annonlab.com",
          password: "123456"
      });

      Meteor.users.update({_id: userId}, {
        $set: {
          profile: {
            is_admin: true
          }
        }
      });
    }

});
