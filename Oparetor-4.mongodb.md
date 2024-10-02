Here is a basic `README.md` for using MongoDB with `$exists`, `$type`, and `$size` operators:

---

# MongoDB Query Operators - Element Query Operators

This project demonstrates the use of MongoDB's element query operators such as `$exists`, `$type`, and `$size`. These operators help filter documents based on the existence of fields, their types, and array sizes. Below are descriptions of each operator with examples.

## Requirements

- MongoDB
- A collection (`practice-data`) within the `PacticeMongo` database.

## Element Query Operators

### 1. `$exists`

The `$exists` operator checks if a particular field exists in a document or not.

#### Syntax

```javascript
{ field: { $exists: <boolean> } }
```

- **true**: The field must exist.
- **false**: The field must not exist.

#### Examples

- **Check if a field does NOT exist**:

  ```javascript
  db["practice-data"].find({ age: { $exists: false } });
  ```

  This query retrieves all documents where the `age` field does not exist.

- **Check if a field exists**:
  ```javascript
  db["practice-data"].find({ age: { $exists: true } });
  ```
  This query retrieves all documents where the `age` field exists.

### 2. `$type`

The `$type` operator selects documents if the field is of the specified BSON type.

#### Syntax

```javascript
{ field: { $type: <BSON type> } }
```

#### Example

- **Select documents where the `age` field is of type `int`**:

  ```javascript
  db["practice-data"].find({ age: { $type: "int" } });
  ```

- **Select documents where the `name` field is of type `string`**:
  ```javascript
  db["practice-data"].find({ name: { $type: "string" } });
  ```

### 3. `$size`

The `$size` operator matches documents where an array field has the specified number of elements.

#### Syntax

```javascript
{ field: { $size: <number> } }
```

#### Example

- **Select documents where the `tags` array has exactly 3 elements**:
  ```javascript
  db["practice-data"].find({ tags: { $size: 3 } });
  ```

## Usage

To use the queries shown above, ensure you are connected to the `PacticeMongo` database and have a collection named `practice-data`.

```javascript
use("PacticeMongo");
```

You can then run the queries directly in the MongoDB shell or in any MongoDB GUI tool like Compass.

## Notes

- The `$exists` operator can be useful for identifying missing or extra fields in documents.
- The `$type` operator helps ensure field values are of the expected data type.
- The `$size` operator is specifically for querying array fields based on their element count.

---

This `README.md` provides basic instructions for working with MongoDB element query operators and their usage examples.
