use("PacticeMongo");

//  mongo db operator

//https://www.mongodb.com/docs/manual/reference/operator/query/

//  comparison operator
// https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

// $eq
//  them rule: when we use oparetor must use {} bracket

// db["practice-data"].find({ gender: { $eq: "Male" } });

db["practice-data"].find({ age: { $eq: 12 } });

// $ne

db["practice-data"].find({ age: { $ne: 12 } });

db[["practice-data"]].find({ age: { $gt: 30 } }); // getter then

db[["practice-data"]].find({ age: { $gt: 30 } }).sort({ age: 1 });
// sort then
db[["practice-data"]].find({ age: { $gte: 30 } }).sort({ age: 1 }); //  then eqale
db[["practice-data"]].find({ age: { $gt: 30 } }); // less then
db[["practice-data"]].find({ age: { $lt: 30 } }).sort({ age: 1 });
// sort then
db[["practice-data"]].find({ age: { $lte: 30 } }).sort({ age: 1 }); // less then eqale

db[["practice-data"]].find({ interests: { $in: ["Writing", "Reading"] } });
db[["practice-data"]].find({ interests: { $nin: ["Writing", "Reading"] } });
