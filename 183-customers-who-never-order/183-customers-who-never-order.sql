# Write your MySQL query statement below

SELECT name  As Customers FROM Customers
WHERE Customers.id NOT IN (SELECT customerId FROM Orders)

