use("PacticeMongo");
db[["practice-data"]]
  .find({ interests: ["Gaming", "Cooking", "Writing"] })
  .projection({ interests: 1 }); // exsetly match

db[["practice-data"]]
  .find({ interests: { $all: ["Gaming", "Cooking", "Writing"] } })
  .projection({ interests: 1 }); // spcific mathc match

db[["practice-data"]]
  .find({
    skills: {
      name: "JAVASCRIPT",
      level: "Expert",
      isLearning: true,
    },
  })
  .projection({ skills: 1 }); // exsetly match

db[["practice-data"]]
  .find({
    skills: {
      $elemMatch: {
        name: "JAVASCRIPT",
        level: "Expert",
        // isLearning: true,
      },
    },
  })
  .projection({ skills: 1 });
