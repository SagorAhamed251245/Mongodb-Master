// Logical Query

/* Logical Query Operators
Logical operators return data based on expressions that evaluate to true or false.

Compatibility
You can use logical query operators for deployments hosted in the following environments:

MongoDB Atlas: The fully managed service for MongoDB deployments in the cloud

MongoDB Enterprise: The subscription-based, self-managed version of MongoDB

MongoDB Community: The source-available, free-to-use, and self-managed version of MongoDB

Operators
Note
For details on a specific operator, including syntax and examples, click on the link to the operator's reference page.

Name
Description
$and
Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
$not
Inverts the effect of a query predicate and returns documents that do not match the query predicate.
$nor
Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
$or
Joins query clauses with a logical OR returns all documents that match the conditions of either clause. */

use("PacticeMongo");
db[["practice-data"]]
  .find({
    $and: [
      { gender: { $eq: "Male" } },
      { age: { $gte: 18 } },
      { age: { $lte: 25 } },
    ],
  })
  .projection({ age: 1, gender: 1 })
  .sort({ age: 1 }); // explicited $andw

db[["practice-data"]]
  .find({
    $or: [{ interests: "Traveling" }, { interests: "Cooking" }],
  })
  .projection({ interests: 1 }); // implisited or

db[["practice-data"]]
  .find({
    $or: [{ "skills.name": "JAVASCRIPT" }, { "skills.name": "PYTHON" }],
  })
  .projection({ skills: 1 });

db[["practice-data"]]
  .find({
    "skills.name": { $in: ["JAVA", "PYTHON"] },
  })
  .projection({ skills: 1 });
