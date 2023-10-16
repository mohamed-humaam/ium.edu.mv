import mysql.connector

db = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    passwd = ''
)

cursor = db.cursor()

db_name = 'iumedumv'

cursor.execute(f"CREATE DATABASE {db_name}")

print(f"Database {db_name} created!")
