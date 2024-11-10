from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_mysqldb import MySQL

import json

app = Flask(__name__)
mysql = MySQL(app)
CORS(app)

# Config MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'y326277886'
app.config['MYSQL_DB'] = 'todo-project'

def handleUsers(query): # Make actions in db 
    # Create Cursor
    cursor = mysql.connection.cursor()

    # Execute
    response = cursor.execute(query)

    # Commit to DB
    mysql.connection.commit()

    # Close connection
    cursor.close()

    return response

def handleOneResult(query): # Make actions and fetch one column
    # Create Cursor
    cursor = mysql.connection.cursor()

    # Execute
    cursor.execute(query)
    
    # Fetch data if the query returns any results
    data = cursor.fetchone()  # Use fetchall() for multiple rows

    # Commit to DB
    mysql.connection.commit()

    # Close connection
    cursor.close()

    return data  # Return the data fetched from the query

def handleMultipleResults(query): # # Make actions and fetch multiple columns
    # Create Cursor
    cursor = mysql.connection.cursor()

    # Execute
    cursor.execute(query)
    
    # Fetch data if the query returns any results
    data = cursor.fetchall()

    # Commit to DB
    mysql.connection.commit()

    # Close connection
    cursor.close()

    return data  # Return the data fetched from the query