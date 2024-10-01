---

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
