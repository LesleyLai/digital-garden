---
parent:
  - "[[SQL|SQL]]"
tags:
  - computing/SQL
created: 2024-10-31
modified: 2024-11-14
publish: true
---
A **join** operation combines columns from multiple tables into a new table. The operation corresponds to a [[./relational algebra#Join|join operation in relational algebra]].

There are two kinds of joins in SQL, **implicit** and **explicit join**.

## Implicit Join

To perform an implicit join, we add multiple tables after `from`. For example,
```sql
select * from employee, department;
```

The join condition is defined using the `where` keyword, for example
```sql
select *
from employee e, department d
where e.departmentId=d.id
```
Implicit joins are concise but can be error prone for complex queries.
## Explicit Joins

Explicit join uses the `join` keyword to join two tables and the `on` keyword to specify the join condition:
```sql
select *
from employee e
join department d on e.departmentId=d.id
```

More formally, join operators are specified in the `from` clause with both a _join type_ and a _join condition_:
- Join types: `join`, `natural join`, `left outer join`, `right outer join`, `full outer join`, `cross join`.
- Join conditions: `on <condition>`, `using (<list of attributes>)`.

### Types of Joins
- **inner join**: Returns matching data from both tables
- **natural join**: Similar to inner join, but automatically combines tables based on columns with the same names and data types without an explicit join conditions.
- **outer join**: Can include rows without matches
  - **left outer join**: includes unmatched rows from the left table
  - **right outer join**: includes unmatched rows from the right table
  - **full outer join**: includes unmatched rows from both tables
- **cross join**: produces a [[Cartesian product|Cartesian product]] from tables

## See Also
- [[./relational algebra#Join|join (relational algebra)]]