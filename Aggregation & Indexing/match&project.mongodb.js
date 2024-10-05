use("PacticeMongo");
db[["practice-data"]].aggregate([
  {
    $match: {
      gender: "Male",
    },
    $group: {
      _id: expression,
      fieldN: {
        accumulatorN: expressionN,
      },
    },
  },
]);
