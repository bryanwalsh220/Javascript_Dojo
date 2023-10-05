/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('my_first_db');

// Create a new document in the collection.
db.getCollection('students').insertOne({
  _id: ObjectId('651e0280064c457ca1a19cbb'),
  name: 'Jeff',
  home_state: 'New York',
  lucky_number: 20,
  birthday: {
    month: 2,
    day: 12,
    year: 1987
  },
  interests: [
    'coding',
    'brunch',
    'MongoDB',
    'hiking',
    'cooking',
    'videogames'
  ],
  number_of_belts: 0,
  updated_on: ISODate('2023-10-05T00:45:23.898Z')
});

//This is what's left after running my commands in mongoDB local terminal -
//some commands I used were
//db.students.updateMany({}, {$set: {updated_on: new Date() }})
//db.students.updateMany({ state: 'Washington'}, {$inc: {number_of_belts: 1}})
//db.students.updateMany({}, {$set: {number_of_belts: 0}})
//db.students.deleteOne({lucky_number: {$gt: 5}})
//db.students.deleteOne({name: 'Bob'})
//db.students.deleteMany({home_state: "California"})
//db.students.updateOne({name: 'Bryan'}, {$pull: {interests: 'taxes'}})
//db.students.updateOne({name: "Bryan"}, {$addToSet: {interests: 'taxes'}})
//db.students.updateMany({}, {$addToSet: {interests: {$each: ['hiking', 'cooking', 'videogames']}}})
//db.students.updateMany({}, {$set: {interests: ['coding', 'brunch', "MongoDB"]}})
//db.students.find({lucky_number: {$gt: 3}})
//db.students.find()
//db.students.deleteOne({_id: ObjectId("651dffa14a1fe5e4daaef7a9")})
//db.students.insertOne({name:"Bryan"})

