CREATE TABLE weeklyexpenses
SELECT * FROM (VALUES ROW('Jan 3', 'Credit', '10', 'Other'), 
ROW('Jan 3', 'Cash', '68.21', 'Groceries'), 
ROW('Jan 4', 'Debit', '101.44', 'Other'), 
ROW('Jan 5', 'Cash', '32.95', 'Entertainment'), 
ROW('Jan 5', 'Cash', '1500', 'Rent'), 
ROW('Jan 5', 'Debit', '92.01', 'Shopping'), 
ROW('Jan 6', 'Debit', '12.81', 'Groceries'), 
ROW('Jan 6', 'Credit', '100', 'Entertainment'), 
ROW('Jan 8', 'Cash', '84.21', 'Shopping'), 
ROW('Jan 9', 'Credit', '92.10', 'Groceries'), 
ROW('Jan 9', 'Cash', '55.28', 'Other')) 
AS v(Date, CCorD, AmountSpent, Category);
