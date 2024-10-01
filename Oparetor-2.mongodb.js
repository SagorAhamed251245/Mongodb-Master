use("PacticeMongo");
db[["practice-data"]]
  .find(
    { age: { $gte: 18, $lte: 30 }, gender: "Female" },
    { age: 1, gender: 1 }
  )
  .sort({ age: 1 }); //implicit n

db[["practice-data"]]
  .find(
    { age: { $gte: 18, $lte: 30 }, gender: { $eq: "Male" } },
    { age: 1, gender: 1 }
  )
  .sort({ age: 1 });

db[["practice-data"]]
  .find(
    {
      age: { $gte: 18, $lte: 30, $in: [18, 20, 24] },
      gender: { $eq: "Female" },
    },
    { age: 1, gender: 1 }
  )
  .sort({ age: 1 });

db[["practice-data"]]
  .find(
    {
      age: { $in: [18, 20, 24, 21, 22] },
      gender: { $eq: "Female" },
    },
    { age: 1, gender: 1 }
  )
  .sort({ age: 1 });

db[["practice-data"]]
  .find(
    {
      age: { $nin: [18, 20, 24, 21, 22] },
      gender: { $eq: "Female" },
    },
    { age: 1, gender: 1 }
  )
  .sort({ age: 1 });

db[["practice-data"]]
  .find(
    {
      interests: { $in: ["Cooking"] },
      age: { $in: [18, 20, 24, 21, 22] },
      gender: { $eq: "Female" },
    },
    { age: 1, gender: 1, interests: 1 }
  )
  .sort({ age: 1 });
