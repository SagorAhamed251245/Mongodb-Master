/* https://www.mongodb.com/docs/manual/reference/operator/update/
Updated oparetor */
use("PacticeMongo");
db[["practice-data"]].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },

  {
    $set: {
      tags: ["coatss", "outerwear", "clothing"],
    },
  },
  {
    tags: 1,
  }
); // its replase hole the data .. so that is not good to use $set with premitive data type for that use

db[["practice-data"]].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },

  {
    $addToSet: {
      tags: ["coatss", "outerwear", "clothing"],
    },
  },
  {
    tags: 1,
  }
); // out put {
/*  "_id": {
      "$oid": "6406ad63fc13ae5a40000067"
    },
    "tags": [
      "coatss",
      "outerwear",
      "clothing",
      [
        "coatss",
        "outerwear",
        "clothing"
      ]
    ]
  } */ // its also not good if tyou provie data as arre use single value ..

db[["practice-data"]].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },

  {
    $addToSet: {
      tags: { $each: ["coats", "outerwear", "clothing"] },
    },
  },
  {
    tags: 1,
  }
); /* out put {
    "_id": {
      "$oid": "6406ad63fc13ae5a40000067"
    },
    "tags": [
      "coatss",
      "outerwear",
      "clothing"
    ]
  } */

db[["practice-data"]].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },

  {
    $push: {
      tags: { $each: ["coats", "outerwear", "clothing"] },
    },
  },
  {
    tags: 1,
  }
); // push allow duplicated value but addToset dont alloaw duplicated entry
