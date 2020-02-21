# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    select productname, categoryname from products
    inner join categories on products.categoryid = categories.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    select orderid, shippername from orders as o
    inner join shippers as s on o.shipperid = s.shipperid
    where orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    select productname, quantity from orderdetails as od
    inner join products as p on od.productid = p.productid
    where orderid = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    select orderid, customername, e.lastname as [Employee LastName] from orders as o
    inner join customers as c on o.customerid = c.customerid
    inner join employees as e on o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

    select categoryname, 
    (select count(productname) from products where products.categoryid = categories.categoryid) as [Count]
    from categories

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

    select orderid, (select count(orderdetailid) from orderdetails where orderdetails.orderid = orders.orderid) as [Count]
    from orders