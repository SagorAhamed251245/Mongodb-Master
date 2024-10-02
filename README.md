Here is the full README with **all the queries** in the table as requested, without any deletions:

---

# MongoDB Practice: Query Operators and Logical Operators

This repository demonstrates various MongoDB query operators, including insertion, filtering, projections, comparison, and logical operators. It provides practical examples to help understand how to work with MongoDB queries effectively.

## Table of Contents

1. [Getting Started](#getting-started)
2. [MongoDB Operations](#mongodb-operations)
   - [Inserting Data](#inserting-data)
   - [Finding Data with Filters](#finding-data-with-filters)
   - [Projections](#projections)
3. [MongoDB Query Operators](#mongodb-query-operators)
   - [Equality Operators](#equality-operators)
   - [Comparison Operators](#comparison-operators)
   - [Array Operators](#array-operators)
4. [MongoDB Logical Query Operators](#mongodb-logical-query-operators)
   - [`$and` Operator](#and-operator)
   - [`$or` Operator](#or-operator)
   - [`$not` Operator](#not-operator)
   - [`$nor` Operator](#nor-operator)
5. [Sorting](#sorting)
6. [Usage Examples](#usage-examples)
7. [Useful Links](#useful-links)

---

## Getting Started

Ensure that you have MongoDB installed and running on your system. You can interact with the database using either the MongoDB shell or MongoDB Compass.

### Switch to Database

```javascript
use("PracticeMongo");
```

The command above switches the context to the `PracticeMongo` database. If the database doesn’t exist, it will be created when data is inserted.

---

## MongoDB Operations

### Inserting Data

To insert a document into the `practice-data` collection, use:

```javascript
db["practice-data"].insertOne({ name: "Something" });
```

This query will insert a document with a `name` field into the `practice-data` collection.

### Finding Data with Filters

To filter documents based on specific fields, use the following example, which filters by the `gender` field:

```javascript
db["practice-data"].find(
  { gender: "Female" },
  { gender: 1, email: 1, phone: 1 }
);
```

This query will filter all documents where `gender` is `"Female"` and return the `gender`, `email`, and `phone` fields.

### Projections

MongoDB projections allow you to specify which fields to include or exclude from the query results. Example:

```javascript
db["practice-data"]
  .find({ gender: "Male" })
  .projection({ name: 1, gender: 1, email: 1 });
```

This query filters for documents where `gender` is `"Male"` and returns the `name`, `gender`, and `email` fields.

---

## MongoDB Query Operators

### Equality Operators

- **$eq**: Matches values that are equal to a specified value.

  ```javascript
  db["practice-data"].find({ gender: { $eq: "Male" } });
  ```

- **$ne**: Matches values that are not equal to a specified value.

  ```javascript
  db["practice-data"].find({ age: { $ne: 12 } });
  ```

### Comparison Operators

- **$gt**: Matches values greater than a specified value.

  ```javascript
  db["practice-data"].find({ age: { $gt: 30 } });
  ```

- **$gte**: Matches values greater than or equal to a specified value.

  ```javascript
  db["practice-data"].find({ age: { $gte: 30 } });
  ```

- **$lt**: Matches values less than a specified value.

  ```javascript
  db["practice-data"].find({ age: { $lt: 30 } });
  ```

- **$lte**: Matches values less than or equal to a specified value.

  ```javascript
  db["practice-data"].find({ age: { $lte: 30 } });
  ```

### Array Operators

- **$in**: Matches any values in a given array.

  ```javascript
  db["practice-data"].find({ interests: { $in: ["Writing", "Reading"] } });
  ```

- **$nin**: Matches none of the values specified in an array.

  ```javascript
  db["practice-data"].find({ interests: { $nin: ["Writing", "Reading"] } });
  ```

---

## MongoDB Logical Query Operators

Logical query operators are used to combine multiple conditions in a query.

### `$and` Operator

Returns documents that match **all** conditions:

```javascript
db["practice-data"]
  .find({
    $and: [
      { gender: { $eq: "Male" } },
      { age: { $gte: 18 } },
      { age: { $lte: 25 } },
    ],
  })
  .projection({ age: 1, gender: 1 })
  .sort({ age: 1 });
```

### `$or` Operator

Returns documents that match **any** of the conditions:

```javascript
db["practice-data"].find({
  $or: [{ interests: "Traveling" }, { interests: "Cooking" }],
});
```

### `$not` Operator

Inverts the result of a query clause:

```javascript
db["practice-data"].find({
  age: { $not: { $gte: 30 } },
});
```

### `$nor` Operator

Joins query clauses with a logical **NOR**:

```javascript
db["practice-data"].find({
  $nor: [{ gender: "Female" }, { age: { $gte: 30 } }],
});
```

---

## Sorting

You can sort results in ascending or descending order based on a specific field. Examples:

- Sort by `age` in ascending order:

  ```javascript
  db["practice-data"].find({}).sort({ age: 1 });
  ```

- Sort by `age` in descending order:

  ```javascript
  db["practice-data"].find({}).sort({ age: -1 });
  ```

---

## Usage Examples

| Operation   | MongoDB Command                                                                                                   | Description                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Insert Data | `db["practice-data"].insertOne({ name: "Something" })`                                                            | Insert a document into the collection.                                   |
| Find Data   | `db["practice-data"].find({ gender: "Female" }, { gender: 1, email: 1, phone: 1 })`                               | Filter by `gender` and return specific fields.                           |
| Projection  | `db["practice-data"].find({ gender: "Male" }).projection({ name: 1, gender: 1, email: 1 })`                       | Filter for `Male` gender and project specific fields.                    |
| `$eq`       | `db["practice-data"].find({ gender: { $eq: "Male" } })`                                                           | Finds documents where `gender` is `Male`.                                |
| `$ne`       | `db["practice-data"].find({ age: { $ne: 12 } })`                                                                  | Finds documents where `age` is not 12.                                   |
| `$gt`       | `db["practice-data"].find({ age: { $gt: 30 } })`                                                                  | Finds documents where `age` is greater than 30.                          |
| `$gte`      | `db["practice-data"].find({ age: { $gte: 30 } })`                                                                 | Finds documents where `age` is greater than or equal to 30.              |
| `$lt`       | `db["practice-data"].find({ age: { $lt: 30 } })`                                                                  | Finds documents where `age` is less than 30.                             |
| `$lte`      | `db["practice-data"].find({ age: { $lte: 30 } })`                                                                 | Finds documents where `age` is less than or equal to 30.                 |
| `$in`       | `db["practice-data"].find({ interests: { $in: ["Writing", "Reading"] } })`                                        | Finds documents where `interests` include `Writing` or `Reading`.        |
| `$nin`      | `db["practice-data"].find({ interests: { $nin: ["Writing", "Reading"] } })`                                       | Finds documents where `interests` do not include `Writing` or `Reading`. |
| `$and`      | `db["practice-data"].find({ $and: [{ gender: { $eq: "Male" } }, { age: { $gte: 18 } }, { age: { $lte: 25 } }] })` | Finds males aged 18 to 25, sorted by age.                                |
| `$or`       | `db["practice-data"].find({ $or: [{ interests: "Traveling" }, { interests: "Cooking" }] })`                       | Finds documents where interests include `Traveling` or `Cooking`.        |
| `$not`      | `db["practice-data"].find({ age: { $not: { $gte: 30 } } })`                                                       | Finds documents where age is not greater than or equal to 30.            |
| `$nor`      | `db["practice-data"].find({ $nor: [{ gender: "Female" }, { age: { $gte: 30 } }] })`                               | Finds documents where gender is not `Female` and age is less than 30.    |
| Sort (Asc)  | `db["practice-data"].find({}).sort({ age: 1 })`                                                                   | Sort results by age in ascending order.                                  |
| Sort (Desc) | `db["practice-data                                                                                                |

"].find({}).sort({ age: -1 })` | Sort results by age in descending order. |

---

## Useful Links

- [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
- [Comparison Operators](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)
- [Logical Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-logical/)
- [MongoDB Sorting](https://www.mongodb.com/docs/manual/reference/method/cursor.sort/)

---

---

# MongoDB Practice: Exact and Specific Matches with Array and Nested Object Queries

This repository demonstrates how to use MongoDB to perform exact matches and specific matches using operators like `$all` and `$elemMatch`, with practical examples of querying documents that contain arrays and nested objects.

## Table of Contents

1. [Getting Started](#getting-started)
2. [MongoDB Operations](#mongodb-operations)
   - [Exact Match for Array Fields](#exact-match-for-array-fields)
   - [Specific Match for Array Fields](#specific-match-for-array-fields)
   - [Exact Match for Nested Objects](#exact-match-for-nested-objects)
   - [Specific Match for Nested Objects](#specific-match-for-nested-objects)
3. [Useful Query Operators](#useful-query-operators)
4. [Usage Examples](#usage-examples)
5. [Useful Links](#useful-links)

---

## Getting Started

Ensure MongoDB is installed and running. You can use the MongoDB shell or MongoDB Compass to run these queries.

### Switch to Database

```javascript
use("PacticeMongo");
```

This command switches the context to the `PacticeMongo` database. If the database does not exist, it will be created automatically when data is inserted.

---

## MongoDB Operations

### Exact Match for Array Fields

To perform an exact match on an array, use the following query. It will return documents where the `interests` array **exactly matches** the provided array.

```javascript
db["practice-data"]
  .find({ interests: ["Gaming", "Cooking", "Writing"] })
  .projection({ interests: 1 });
```

In this case, only documents with `interests` exactly matching `["Gaming", "Cooking", "Writing"]` will be returned.

### Specific Match for Array Fields

To match documents containing all the specified elements (but not necessarily in the same order or only these elements), use the `$all` operator:

```javascript
db["practice-data"]
  .find({ interests: { $all: ["Gaming", "Cooking", "Writing"] } })
  .projection({ interests: 1 });
```

This query will return documents where the `interests` field contains **at least** the specified elements `["Gaming", "Cooking", "Writing"]`.

### Exact Match for Nested Objects

To find documents with an **exact match** on a nested object, use the following query. This query finds documents where the `skills` field matches the provided object **exactly**:

```javascript
db["practice-data"]
  .find({
    skills: {
      name: "JAVASCRIPT",
      level: "Expert",
      isLearning: true,
    },
  })
  .projection({ skills: 1 });
```

This will return documents where `skills` is an exact match to the provided structure.

### Specific Match for Nested Objects

For more flexibility in matching nested objects, such as when you only care about some fields, use the `$elemMatch` operator:

```javascript
db["practice-data"]
  .find({
    skills: {
      $elemMatch: {
        name: "JAVASCRIPT",
        level: "Expert",
        // Optional: isLearning: true,
      },
    },
  })
  .projection({ skills: 1 });
```

This query will return documents where the `skills` field contains an element that matches the specified conditions.

---

## Useful Query Operators

| Operator     | Description                                                                                             | Example                                                               |
| ------------ | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `$all`       | Matches arrays that contain all specified elements.                                                     | `{ interests: { $all: ["Gaming", "Cooking"] } }`                      |
| `$elemMatch` | Matches documents containing an array that satisfies all specified conditions for at least one element. | `{ skills: { $elemMatch: { name: "JAVASCRIPT", level: "Expert" } } }` |
| `$in`        | Matches any documents where the value of a field is in a specified array of values.                     | `{ skills: { $in: ["JAVASCRIPT", "PYTHON"] } }`                       |
| `$eq`        | Matches values that are exactly equal to a specified value.                                             | `{ age: { $eq: 30 } }`                                                |
| `$ne`        | Matches values that are not equal to a specified value.                                                 | `{ age: { $ne: 25 } }`                                                |
| `$gt`        | Matches values greater than a specified value.                                                          | `{ age: { $gt: 30 } }`                                                |
| `$lt`        | Matches values less than a specified value.                                                             | `{ age: { $lt: 30 } }`                                                |

---

## Usage Examples

Here are examples of different MongoDB queries using the `$all`, `$elemMatch`, and exact matching approaches for arrays and nested objects.

1. **Exact match for an array:**

   ```javascript
   db["practice-data"]
     .find({ interests: ["Gaming", "Cooking", "Writing"] })
     .projection({ interests: 1 });
   ```

2. **Specific match for an array:**

   ```javascript
   db["practice-data"]
     .find({ interests: { $all: ["Gaming", "Cooking", "Writing"] } })
     .projection({ interests: 1 });
   ```

3. **Exact match for a nested object:**

   ```javascript
   db["practice-data"]
     .find({
       skills: {
         name: "JAVASCRIPT",
         level: "Expert",
         isLearning: true,
       },
     })
     .projection({ skills: 1 });
   ```

4. **Specific match for a nested object using `$elemMatch`:**

   ```javascript
   db["practice-data"]
     .find({
       skills: {
         $elemMatch: {
           name: "JAVASCRIPT",
           level: "Expert",
         },
       },
     })
     .projection({ skills: 1 });
   ```

---

## Useful Links

For further reference, check the official MongoDB documentation:

- [MongoDB $all Operator](https://www.mongodb.com/docs/manual/reference/operator/query/all/)
- [MongoDB $elemMatch Operator](https://www.mongodb.com/docs/manual/reference/operator/query/elemMatch/)
- [MongoDB Array Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query-array/)
- [MongoDB Query Comparison Operators](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)

---

---

# MongoDB Practice: Update Operations with Arrays and Primitive Data

This repository demonstrates how to use MongoDB operators for updating array fields and preventing unintended behavior, such as replacing entire arrays or allowing duplicate values. It provides examples of the correct usage of `$set`, `$addToSet`, and `$push`.

## Table of Contents

1. [Getting Started](#getting-started)
2. [MongoDB Update Operations](#mongodb-update-operations)
   - [$set Operator](#set-operator)
   - [$addToSet Operator](#addtoset-operator)
   - [$push Operator](#push-operator)
3. [Key Details](#key-details)
4. [Useful Query Operators Table](#useful-query-operators-table)
5. [Usage Examples](#usage-examples)
6. [Useful Links](#useful-links)

---

## Getting Started

Make sure MongoDB is installed and running on your machine. You can use the MongoDB shell or MongoDB Compass to run these queries.

### Switch to Database

```javascript
use("PacticeMongo");
```

This command switches the context to the `PacticeMongo` database. If the database doesn't exist, it will be created when you insert or update data.

---

## MongoDB Update Operations

### $set Operator

The `$set` operator replaces the entire field content. If you use it with an array, the entire array is replaced. This can be problematic when you only want to modify or append values.

```javascript
db["practice-data"].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },
  {
    $set: {
      tags: ["coats", "outerwear", "clothing"],
    },
  },
  {
    tags: 1,
  }
);
```

_Note:_ This query replaces the entire `tags` array, which is not ideal when working with arrays you want to modify or append to.

### $addToSet Operator

The `$addToSet` operator is useful for adding items to an array **without** allowing duplicates. However, if you pass an array directly into `$addToSet`, it will add the entire array as a single element. To add multiple items, use `$each`.

Incorrect use of `$addToSet` (adds the whole array as an element):

```javascript
db["practice-data"].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },
  {
    $addToSet: {
      tags: ["coats", "outerwear", "clothing"],
    },
  },
  {
    tags: 1,
  }
);
/* Output:
{
  "_id": ObjectId("6406ad63fc13ae5a40000067"),
  "tags": [
    "coats", 
    "outerwear", 
    "clothing",
    ["coats", "outerwear", "clothing"] // Added array as a single element, which is incorrect.
  ]
} */
```

Correct use of `$addToSet` with `$each`:

```javascript
db["practice-data"].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },
  {
    $addToSet: {
      tags: { $each: ["coats", "outerwear", "clothing"] },
    },
  },
  {
    tags: 1,
  }
);
/* Correct Output:
{
  "_id": ObjectId("6406ad63fc13ae5a40000067"),
  "tags": [
    "coats", 
    "outerwear", 
    "clothing"
  ]
} */
```

### $push Operator

The `$push` operator adds elements to an array. Unlike `$addToSet`, it **allows duplicate values**. If duplicates are acceptable, `$push` is the right choice.

```javascript
db["practice-data"].updateOne(
  { _id: ObjectId("6406ad63fc13ae5a40000067") },
  {
    $push: {
      tags: { $each: ["coats", "outerwear", "clothing"] },
    },
  },
  {
    tags: 1,
  }
);
/* $push allows duplicates. So, this query will add the specified elements to the array, even if they are duplicates. */
```

---

## Key Details

- **$set**: Replaces the entire field, which can overwrite arrays or objects.
- **$addToSet**: Adds elements to an array, preventing duplicates. Use `$each` to add multiple elements.
- **$push**: Adds elements to an array, allowing duplicates. Use `$each` to add multiple elements.

---

## Useful Query Operators Table

| Operator    | Description                                                              | Example                                                                                   |
| ----------- | ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| `$set`      | Replaces the entire content of the field.                                | `db.collection.updateOne({ _id: id }, { $set: { field: value } })`                        |
| `$addToSet` | Adds elements to an array but prevents duplicates.                       | `db.collection.updateOne({ _id: id }, { $addToSet: { field: value } })`                   |
| `$each`     | Used within `$addToSet` or `$push` to add multiple elements to an array. | `db.collection.updateOne({ _id: id }, { $addToSet: { field: { $each: [val1, val2] } } })` |
| `$push`     | Adds elements to an array, allowing duplicates.                          | `db.collection.updateOne({ _id: id }, { $push: { field: { $each: [val1, val2] } } })`     |

---

## Usage Examples

1. **$set Example:**

   ```javascript
   db["practice-data"].updateOne(
     { _id: ObjectId("6406ad63fc13ae5a40000067") },
     {
       $set: {
         tags: ["coats", "outerwear", "clothing"],
       },
     },
     { tags: 1 }
   );
   ```

2. **$addToSet with Incorrect Usage Example:**

   ```javascript
   db["practice-data"].updateOne(
     { _id: ObjectId("6406ad63fc13ae5a40000067") },
     {
       $addToSet: {
         tags: ["coats", "outerwear", "clothing"],
       },
     },
     { tags: 1 }
   );
   ```

3. **$addToSet with Correct Usage ($each):**

   ```javascript
   db["practice-data"].updateOne(
     { _id: ObjectId("6406ad63fc13ae5a40000067") },
     {
       $addToSet: {
         tags: { $each: ["coats", "outerwear", "clothing"] },
       },
     },
     { tags: 1 }
   );
   ```

4. **$push Example (Allows Duplicates):**

   ```javascript
   db["practice-data"].updateOne(
     { _id: ObjectId("6406ad63fc13ae5a40000067") },
     {
       $push: {
         tags: { $each: ["coats", "outerwear", "clothing"] },
       },
     },
     { tags: 1 }
   );
   ```

---

## Useful Links

- [MongoDB Update Operators Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/)
- [MongoDB $set Operator](https://www.mongodb.com/docs/manual/reference/operator/update/set/)
- [MongoDB $addToSet Operator](https://www.mongodb.com/docs/manual/reference/operator/update/addToSet/)
- [MongoDB $push Operator](https://www.mongodb.com/docs/manual/reference/operator/update/push/)

---
