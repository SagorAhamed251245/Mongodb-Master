// 5-6 $exists, $type,$size
/* Element Query Operators
Element operators return data based on field existence or data types.

Note
For details on a specific operator, including syntax and examples, click on the link to the operator's reference page.

Name
Description
$exists
Matches documents that have the specified field.
$type
Selects documents if a field is of the specified type. */

use("PacticeMongo");
db[["practice-data"]].find({ age: { $exists: false } });

use("PacticeMongo");
db[["practice-data"]].find({ age: { $exists: true } });
