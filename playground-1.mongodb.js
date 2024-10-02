use("PacticeMongo");

// find quire

// insert data

// db["practice-data"].insertOne({ name: "Something" });

// fill filtering

/* db["practice-data"].find(
  { gender: "Female" },
  { gender: 1, email: 1, phone: 1 }
); */

// another fill filtering but it work only find not able to use findOne

/* db["practice-data"]
  .find({ gender: "Male" })
  .projection({ name: 1, gender: 1, email: 1 }); */
