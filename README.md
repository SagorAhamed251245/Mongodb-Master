---

# Practice MongoDB Queries

This repository contains simple examples of MongoDB operations, including inserting data, filtering documents, and applying projections. It serves as a basic reference for common MongoDB queries.

## Table of Contents

1. [Getting Started](#getting-started)
2. [MongoDB Operations](#mongodb-operations)
   - [Inserting Data](#inserting-data)
   - [Finding Data with Filters](#finding-data-with-filters)
   - [Projections](#projections)
3. [Usage Examples](#usage-examples)

---

## Getting Started

To get started with MongoDB, ensure you have it installed and running on your machine. You can use the MongoDB shell or MongoDB Compass for executing the commands.

### Switch to Database

```javascript
use("PracticeMongo");
```

The command above switches the context to the `PracticeMongo` database. If the database doesn’t exist, it will be created upon inserting data.

---

## MongoDB Operations

### Inserting Data

To insert a document into the `practice-data` collection, use the following query:

```javascript
db["practice-data"].insertOne({ name: "Something" });
```

This will insert a document with the `name` field into the `practice-data` collection.

### Finding Data with Filters

You can filter documents based on field values. Below is an example of filtering by the `gender` field:

```javascript
db["practice-data"].find(
  { gender: "Female" },
  { gender: 1, email: 1, phone: 1 }
);
```

This query filters all documents where `gender` is `"Female"` and returns the `gender`, `email`, and `phone` fields.

### Projections

MongoDB projections allow you to specify which fields to include or exclude from the query results. Here's an example that uses projections to display only specific fields:

```javascript
db["practice-data"]
  .find({ gender: "Male" })
  .projection({ name: 1, gender: 1, email: 1 });
```

This query filters for documents where `gender` is `"Male"` and only returns the `name`, `gender`, and `email` fields. Note that `.projection()` works with `.find()` but is not applicable for `.findOne()`.

---

## Usage Examples

| Operation          | MongoDB Command                                                                             | Description                                                           |
| ------------------ | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Insert Data        | `db["practice-data"].insertOne({ name: "Something" })`                                      | Insert a document into the `practice-data` collection.                |
| Find Data (Filter) | `db["practice-data"].find({ gender: "Female" }, { gender: 1, email: 1, phone: 1 })`         | Find documents where `gender` is `Female` and return specific fields. |
| Projection         | `db["practice-data"].find({ gender: "Male" }).projection({ name: 1, gender: 1, email: 1 })` | Filter for `Male` gender and project specific fields.                 |

---

## Notes

- **Inserting Data**: Always ensure your collection name is in the correct format.
- **Finding Data**: Use `.find()` to filter multiple documents and `.findOne()` to fetch only one document. Projections only work with `.find()`.

---

---

---

# MongoDB Query Operators - Practice

This repository demonstrates how to use MongoDB query operators, particularly comparison operators, to filter and retrieve data from a collection. It provides practical examples for common operators such as `$eq`, `$ne`, `$gt`, and `$in`.

## Table of Contents

1. [Getting Started](#getting-started)
2. [MongoDB Operators Overview](#mongodb-operators-overview)
   - [Equality Operators](#equality-operators)
   - [Comparison Operators](#comparison-operators)
   - [Array Operators](#array-operators)
3. [Sorting](#sorting)
4. [Official Documentation](#official-documentation)
5. [Usage Examples](#usage-examples)

---

## Getting Started

To follow along with this project, ensure that you have MongoDB installed. You can run the queries in the MongoDB shell or using MongoDB Compass.

### Switch to Database

```javascript
use("PracticeMongo");
```

This command switches to the `PracticeMongo` database. The database is created automatically when data is inserted.

---

## MongoDB Operators Overview

MongoDB provides a variety of query operators that can be used to retrieve documents based on specific conditions. Below are the examples of commonly used operators:

### Equality Operators

- **$eq**: Matches values that are equal to a specified value.

  ```javascript
  db["practice-data"].find({ gender: { $eq: "Male" } });
  db["practice-data"].find({ age: { $eq: 12 } });
  ```

- **$ne**: Matches all values that are not equal to a specified value.
  ```javascript
  db["practice-data"].find({ age: { $ne: 12 } });
  ```

### Comparison Operators

- **$gt**: Matches values that are greater than a specified value.

  ```javascript
  db["practice-data"].find({ age: { $gt: 30 } });
  ```

- **$gte**: Matches values that are greater than or equal to a specified value.

  ```javascript
  db["practice-data"].find({ age: { $gte: 30 } });
  ```

- **$lt**: Matches values that are less than a specified value.

  ```javascript
  db["practice-data"].find({ age: { $lt: 30 } });
  ```

- **$lte**: Matches values that are less than or equal to a specified value.
  ```javascript
  db["practice-data"].find({ age: { $lte: 30 } });
  ```

### Array Operators

- **$in**: Matches any of the values specified in an array.

  ```javascript
  db["practice-data"].find({ interests: { $in: ["Writing", "Reading"] } });
  ```

- **$nin**: Matches none of the values specified in an array.
  ```javascript
  db["practice-data"].find({ interests: { $nin: ["Writing", "Reading"] } });
  ```

---

## Sorting

MongoDB provides sorting functionality to sort the results based on a specific field.

- Sort in ascending order (1) or descending order (-1) based on the `age` field.
  ```javascript
  db["practice-data"].find({ age: { $gt: 30 } }).sort({ age: 1 });
  db["practice-data"].find({ age: { $lt: 30 } }).sort({ age: 1 });
  ```

---

## Official Documentation

For further reference and more query operators, you can explore the official MongoDB documentation:

- [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
- [Comparison Operators](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)

---

## Usage Examples

| Operator | MongoDB Query                                                               | Description                                                              |
| -------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `$eq`    | `db["practice-data"].find({ age: { $eq: 12 } })`                            | Finds documents where `age` is 12.                                       |
| `$ne`    | `db["practice-data"].find({ age: { $ne: 12 } })`                            | Finds documents where `age` is not 12.                                   |
| `$gt`    | `db["practice-data"].find({ age: { $gt: 30 } })`                            | Finds documents where `age` is greater than 30.                          |
| `$gte`   | `db["practice-data"].find({ age: { $gte: 30 } })`                           | Finds documents where `age` is greater than or equal to 30.              |
| `$lt`    | `db["practice-data"].find({ age: { $lt: 30 } })`                            | Finds documents where `age` is less than 30.                             |
| `$lte`   | `db["practice-data"].find({ age: { $lte: 30 } })`                           | Finds documents where `age` is less than or equal to 30.                 |
| `$in`    | `db["practice-data"].find({ interests: { $in: ["Writing", "Reading"] } })`  | Finds documents where `interests` include `Writing` or `Reading`.        |
| `$nin`   | `db["practice-data"].find({ interests: { $nin: ["Writing", "Reading"] } })` | Finds documents where `interests` do not include `Writing` or `Reading`. |

---

\---

# MongoDB Query Operators - Advanced Filtering

This repository demonstrates how to use MongoDB operators for advanced filtering based on multiple fields, such as `age`, `gender`, and `interests`. Additionally, it shows how to sort results and use various comparison operators effectively.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Compound Filtering](#compound-filtering)
   - [Range Queries with Comparison Operators](#range-queries-with-comparison-operators)
   - [Using the `$in` Operator](#using-the-in-operator)
   - [Using the `$nin` Operator](#using-the-nin-operator)
3. [Sorting](#sorting)
4. [Official Documentation](#official-documentation)
5. [Usage Examples](#usage-examples)

---

## Getting Started

To begin, ensure that MongoDB is installed, and you have switched to the appropriate database.

### Switch to Database

```javascript
use("PacticeMongo");
```

This switches to the `PacticeMongo` database, where the following queries will be executed.

---

## Compound Filtering

### Range Queries with Comparison Operators

You can filter based on a range of ages and a specific gender, and only return the `age` and `gender` fields.

- **Find females aged between 18 and 30 (inclusive):**

  ```javascript
  db["practice-data"]
    .find(
      { age: { $gte: 18, $lte: 30 }, gender: "Female" },
      { age: 1, gender: 1 }
    )
    .sort({ age: 1 });
  ```

- **Find males aged between 18 and 30 (inclusive):**
  ```javascript
  db["practice-data"]
    .find(
      { age: { $gte: 18, $lte: 30 }, gender: { $eq: "Male" } },
      { age: 1, gender: 1 }
    )
    .sort({ age: 1 });
  ```

### Using the `$in` Operator

The `$in` operator is useful when you want to find documents where a field matches any value in a given array. This can be combined with other filters, such as age or gender.

- **Find females aged exactly 18, 20, or 24:**

  ```javascript
  db["practice-data"]
    .find(
      {
        age: { $in: [18, 20, 24] },
        gender: { $eq: "Female" },
      },
      { age: 1, gender: 1 }
    )
    .sort({ age: 1 });
  ```

- **Find females interested in "Cooking" and aged exactly 18, 20, 21, 22, or 24:**
  ```javascript
  db["practice-data"]
    .find(
      {
        interests: { $in: ["Cooking"] },
        age: { $in: [18, 20, 24, 21, 22] },
        gender: { $eq: "Female" },
      },
      { age: 1, gender: 1, interests: 1 }
    )
    .sort({ age: 1 });
  ```

### Using the `$nin` Operator

The `$nin` operator allows you to exclude certain values from the query. This example shows how to exclude specific ages from the results while filtering by gender.

- **Find females aged _not_ 18, 20, 21, 22, or 24:**
  ```javascript
  db["practice-data"]
    .find(
      {
        age: { $nin: [18, 20, 21, 22, 24] },
        gender: { $eq: "Female" },
      },
      { age: 1, gender: 1 }
    )
    .sort({ age: 1 });
  ```

---

## Sorting

Sorting allows you to arrange the results based on one or more fields. You can specify `1` for ascending order and `-1` for descending order.

- **Sort results by `age` in ascending order:**

  ```javascript
  db["practice-data"].find({}).sort({ age: 1 });
  ```

- **Sort results by `age` in descending order:**
  ```javascript
  db["practice-data"].find({}).sort({ age: -1 });
  ```

You can apply sorting in combination with any of the queries shown above to get the results ordered by age, as demonstrated in the examples.

---

## Official Documentation

For more details on MongoDB operators and query usage, refer to the official MongoDB documentation:

- [MongoDB Query Operators](https://www.mongodb.com/docs/manual/reference/operator/query/)
- [Comparison Operators](https://www.mongodb.com/docs/manual/reference/operator/query-comparison/)

---

## Usage Examples

Here are additional examples of querying based on different conditions:

### Find People Between Age 25 and 40 Who Are Male

```javascript
db["practice-data"]
  .find(
    { age: { $gte: 25, $lte: 40 }, gender: { $eq: "Male" } },
    { age: 1, gender: 1 }
  )
  .sort({ age: 1 });
```

### Find People Interested in "Reading" or "Writing"

```javascript
db["practice-data"]
  .find(
    { interests: { $in: ["Reading", "Writing"] } },
    { name: 1, interests: 1 }
  )
  .sort({ name: 1 });
```

### Exclude People Interested in "Sports"

```javascript
db["practice-data"]
  .find({ interests: { $nin: ["Sports"] } }, { name: 1, interests: 1 })
  .sort({ name: 1 });
```

---

## Conclusion

This README provides examples of using MongoDB query operators for filtering data based on various fields, along with sorting the results. By mastering these operators, you can perform powerful and efficient queries in MongoDB for complex data sets.

Feel free to contribute more examples or improvements to this repository!

---
