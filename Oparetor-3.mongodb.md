---

# MongoDB Practice: Logical Query Operators

## Introduction

Logical query operators in MongoDB allow you to filter data based on logical conditions that return documents when an expression evaluates to true or false. This is particularly useful when querying complex datasets with multiple conditions.

You can use logical query operators in various MongoDB environments such as:

- **MongoDB Atlas** (Cloud-based deployment)
- **MongoDB Enterprise** (Subscription-based, self-managed)
- **MongoDB Community** (Free-to-use, self-managed)

---

## Logical Query Operators

| Operator | Description                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| `$and`   | Joins query clauses with a logical **AND**. Returns documents that satisfy **all** conditions.        |
| `$or`    | Joins query clauses with a logical **OR**. Returns documents that satisfy **any** condition.          |
| `$not`   | Inverts the result of a query clause. Returns documents that **do not** satisfy the condition.        |
| `$nor`   | Joins query clauses with a logical **NOR**. Returns documents that **fail** to match both conditions. |

---

## Examples

### 1. `$and` - Query for males aged between 18 and 25, sorted by age

```js
use("PacticeMongo");
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

### 2. `$or` - Query for users interested in either Traveling or Cooking

```js
use("PacticeMongo");
db["practice-data"]
  .find({
    $or: [{ interests: "Traveling" }, { interests: "Cooking" }],
  })
  .projection({ interests: 1 });
```

### 3. `$or` - Query for users with skills in either JavaScript or Python

```js
use("PacticeMongo");
db["practice-data"]
  .find({
    $or: [{ "skills.name": "JAVASCRIPT" }, { "skills.name": "PYTHON" }],
  })
  .projection({ skills: 1 });
```

### 4. `$in` - Query for users with skills in either Java or Python

```js
use("PacticeMongo");
db["practice-data"]
  .find({
    "skills.name": { $in: ["JAVA", "PYTHON"] },
  })
  .projection({ skills: 1 });
```

---

## Useful Links

- [MongoDB $and Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/query/and/)
- [MongoDB $or Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/query/or/)
- [MongoDB $not Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/query/not/)
- [MongoDB $in Operator Documentation](https://www.mongodb.com/docs/manual/reference/operator/query/in/)

---
