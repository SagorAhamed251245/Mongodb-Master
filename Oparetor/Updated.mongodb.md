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
