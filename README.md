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

This README provides basic MongoDB operations, query operators, and logical operators with examples to help you practice and get familiar with MongoDB queries. Feel free to contribute more examples or improvements!
