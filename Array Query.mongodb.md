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
