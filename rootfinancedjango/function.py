import mysql.connector

try: 

    mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mysqlfion",
    database="fdjango")

    cursor = mydb.cursor()

    sql = "INSERT INTO `Weeklyexpenses` (`datee`, CCorD, `AmountSpent`, `Category`) VALUES (%s, %s, %s, %s)"
    val = ('Jan 17', CCorD, `AmountSpent`, `Category`)
    cursor.execute(sql, val)

    mydb.commit()

    sql = "SELECT * FROM `Weeklyexpenses`"
    cursor.execute(sql)

    result = cursor.fetchall()
    for i in result:
        print(i)

except Error as e:
    print(e)

finally:
    # close the database connection using close() method.
    connection.close()



