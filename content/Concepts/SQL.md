---
created: 2024-08-04
modified: 2024-10-31
parent:
  - "[[computing|computing]]"
publish: true
tags:
  - computing/SQL
  - computing/database
---
**SQL** stands for **Standard Query Language** for relational databases. It is based on formal query languages such as [[./relational algebra|relational algebra]] and [[tuple calculus|tuple calculus]].

SQL was originally developed in the 1970s as part of the IBM System R project. IBM originally called it "SEQUEL" (Structured English Query Language). The name changed in the 1980s to just "SQL".

SQL is declarative, meaning that a query specifies _what_ data to retrieve, not _how_ to retrieve it. A query typically takes several tables as input and returns a single table as the result. For example:
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

Unfortunately, despite the existence of a SQL standard, each DBMS has their own SQL dialect and each has different feature sets and syntactic quirks.

## Subtopics
- [[foreign key|foreign key]]
- [[join in SQL|join in SQL]]
- [[database transactions|transactions]]

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

## Set Operations

SQL supports set operations such as `UNION`, `INTERSECT`, and `EXCEPT`, which also eliminate duplicates by default.