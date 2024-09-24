---
created: 2024-08-04
modified: 2024-08-25
parent:
  - "[[computing|computing]]"
publish: true
tags:
  - computing/SQL
---

**SQL** stands for **Standard Query Language** for relational databases. It is based on formal query languages such as [[./relational algebra|relational algebra]] and [[tuple calculus|tuple calculus]].

SQL was originally developed in the 1970s as part of the IBM System R project. IBM originally called it "SEQUEL" (Structured English Query Language). The
name changed in the 1980s to just "SQL".

SQL is nonprocedural, meaning that a query specifies _what_ data to retrieve, not _how_ to retrieve it. A query typically takes several tables as input and returns a single table as the result. For example:
```sql
select instructor.ID, department.dept_name
from instructor, department
where instructor.dept_name= department.dept_name and
department.budget > 95000;
```

Some details:
- SQL commands are not case-sensitive.
    - `SELECT`, `Select`, and `select` are treated the same.
- Use single quotes for string constants:
    - `'working'` is valid, while `"bad"` is not.

## SQL and Relational Algebra
SQL is based on [[./relational algebra|relational algebra]], but there are some notable differences. One of the big differences is that relational algebra is based on sets (no duplicate), where SQL is based on bags (duplicates allowed).

Another difference is the choice of terminology. Notably, the select operator ($\sigma$) in relational algebra corresponds to the `where` clause in SQL, while the project operator ($\pi$) corresponds to the `select` clause in SQL.

## Keywords
- `select`: Specifies the columns to retrieve.
  -  corresponds to the **projection** ($\pi$) operation in relational algebra.
- `from`: Indicates the table(s) from which to retrieve data.
- `where`: Specifies conditions for including rows in the result
  - corresponds to the **selection** ($\sigma$) operation in relational algebra
- `group by`: Categorizes rows into groups.
- `having`: Specifies conditions for including groups in the result.
- `order by`: Sorts the result based on specified criteria.

## Remove Duplicates
SQL queries can return duplicate rows. To eliminate duplicates, use the `distinct` keyword:
```sql
select distinct column_name from table_name;
```

## Arithmetic Expressions
SQL supports arithmetic operations within queries:
```sql
select uos_code, title, points*2
  from UnitOfStudy
```

## `where` Clause
- comparison operators in SQL: `=`, `>`, `>=`, `<`, `<=`, `<>` (or `!=`)

## String Operations
SQL includes string-matching functionality through the `LIKE` operator:

wildcards:
- percent (`%`): matches any substring
- underscore (`_`): matches a single character

## Rename Operation
You can rename columns using the `as` keyword (i.e. `old_name as new_name`)
e.g.
```sql
select a.uos_code as course_code, a.credit_points from UnitOfStudy   as a;
```

## Order By Clause
The `order by` clause allows sorting of results:
- You can specify ascending (`ASC`) or descending (`DESC`) order.
- Example: `order by country DESC, name ASC`.

## Join Queries
An _implicit join_ combines two or more tables into one. The `from` clause lists the tables involved, corresponding to a [[Cartesian product|Cartesian product]]. Join conditions are specified in the `WHERE` clause.

### Aliases

When you need to refer to the same table more than once in a query, use table aliases.

### Explicit Joins

- **Inner join**: Returns rows with matching data in both tables. By default, SQL performs an inner join.
    - **Theta join**: `R join S on <join condition>`.
    - **Natural join**: `R natural join S`. For specific attributes, it becomes an equi-join: `R join S using (<list of attributes>)`.
- **Outer join**: Includes rows without matches.
    - **Left outer join**: Includes unmatched rows from the left table.
    - **Right outer join**: Includes unmatched rows from the right table.
    - **Full outer join**: Includes unmatched rows from both tables.

### Join Operators

Join operators are specified in the `FROM` clause and require both a _join type_ and a _join condition_.

- Join types: `JOIN`, `LEFT OUTER JOIN`, `RIGHT OUTER JOIN`, `FULL OUTER JOIN`.
- Join conditions: `NATURAL`, `ON <condition>`, `USING (<list of attributes>)`.

## Set Operations

SQL supports set operations such as `UNION`, `INTERSECT`, and `EXCEPT`, which eliminate duplicates by default.