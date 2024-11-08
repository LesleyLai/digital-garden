---
parent:
  - "[[./database|database]]"
tags:
  - computing/database/theory
created: 2024-08-22
modified: 2024-08-25
publish: true
---
**Relational algebra** is a set of *operators* to retrieve and manipulate [[tuple|tuples]] in a [[relation (database)|relation]]. Each operator takes in one or more relations as inputs, and outputs a new relation. To write queries we can “chain” these operators together to create more complex operations.

Relational algebra describes a step-by-step procedure (i.e. describes the *how*) for computing the desired answer (imperative). This contrast with *[[tuple calculus|tuple calculus]]*, which is declarative.

Different relational algebra expressions can be logically equivalent but with different execution costs. This gives [[./database|DBMS]] opportunities to optimize.

## Basic Operators
### Select
Select is a unary operator that selects a subset of rows from a relation.
- Syntax: $\sigma_{\text{predicate}}(\text{R})$
- Example: $\sigma_{\text{country='AUS'}}(\text{Students})$
- SQL: `SELECT * FROM Students WHERE country = 'AUS'`
> [!warning] The select operator corresponds to `WHERE` rather than `SELECT` in SQL
### Projection
The projection is an unary operator that selects a subset of columns from a relation
- Syntax: $\pi_{A_{1}, A_{2}, \cdots, A_{n}}(\text{R})$
- Example: $\pi_{\text{name}, \text{country}}(\text{Students})$
- SQL: `SELECT name,country FROM Students`
> [!warning] The projection operator correspond to `SELECT` in SQL
## Cross-product
The cross product operator, also known as the [[Cartesian product|Cartesian product]], generates all possible combinations of tuples from two relations. It is defined as $R \times S = \{ t\,s\ |\ t \in R \land s \in S \}$.
SQL: `(SELECT * FROM R) CROSS JOIN (SELECT * FROM S)`, or simply `SELECT * FROM R, S`
### Join
combines *matching* tuples from two relations
#### Conditional (or Theta) Join
$R \bowtie_{\Theta} S = \sigma_{\Theta}(R \times S)$

#### Equi-Join
Special case of theta join where the condition $\Theta$ contains only equalities

#### Natural Join
Equijoin on all common (i.e. same named) fields, followed by a projection
- Syntax: $R \bowtie S$
- SQL: `SELECT * FROM R JOIN S USING (ATTRIBUTE1, ATTRIBUTE)`
### Set Operations
Important constraint: $R$ and $S$ have compatible schema
#### Union
Set union of a relations A and B returns all tuples in relation A plus those that are in relation B
Syntax: $R \cup S$
SQL: `(SELECT * FROM R) UNION ALL (SELECT * FROM S)`
#### Intersection
Set intersection
Syntax: $R \cap S$
SQL: `(SELECT * FROM R) INTERSECT (SELECT * FROM S)`
#### Difference
Set difference
Syntax: $R - S$
SQL: `(SELECT * FROM R) EXCEPT (SELECT * FROM S)`

### Rename ($\rho$)
Notation 1: $\rho_{X}(E)$
- returns the expression $E$ under the name $X$
Notation 2: $\rho_{X(A_1, A_2, \dots, A_N)}(E)$
- (assumes that the relational-algebra expression E has arity N)
- rename all the attributes

## Basis versus Derived Operations
Only 6 basic operators are required to express everything else
- Selection
- Projection
- Cross-product
- Union
- Set Difference
- Rename

Other operators can be derived. For example:
- Intersection $R \cap S = R - (R - S)$
- join $R \bowtie_{\Theta} S = \sigma_{\Theta}(R \times S)$