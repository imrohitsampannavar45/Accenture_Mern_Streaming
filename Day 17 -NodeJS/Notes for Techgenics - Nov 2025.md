1. singleton
2. async await
3. getting input from the user
4. observable vs promises
5. publish, libuv, blue bird
 
Node JS:
 
1. Single threaded
2. Javascript framework
3. Asyncronous -> equivalent to multi-threading
4. Part of full-stack development
5. I/o based operations
6. Event-driven
7. client side - server-side js
 
Plan:
 
1. Node JS
   Module:
   *Core Module - url, util, fs, streams, os, http
   *Local Module - we create
   -functionalities written by us - specific to the business
   \*NPM Module - Third party module - Express, mongodb, mongoose
   -Rich set of functionalities
   -install from npm repository
 
Routing, Route param,get, post
 
2. Mongo DB
   *CRUD Operation
   *Mongo compass
   \*Commands to interact with Mongo Server
   ======================================================================
 
Node JS:
Module:
functionalities that are categorized
 
1. Core Module:
   *Built-in module
   require('name of the module') => equivalent import statement
   *Basic functionalities
 
HTTP module:
create server apps
Server: ip, end point, receive request, response as data, connect to db
port no, listens to request
 
Routing:
Navigation
 
//http://locahost:7000/shows => all the details of shows
//http://localhost:7000/movies/1 =>all the details of the movies
//http://localhost:7000/sports =>similar approach
logical arrangement of the web contents, move around you content
 
HTTP:
*is a stateless protocol
*send a response -> write the header
*you use createServer() -> instance of the server
*if -else =>complicates the readability of the coded - routing
 
## Npm Module:
 
npm i module_name@versionno
 
## Express:
 
*framework
*stateful
*helping us to create a server
*routing effectively
 
2 http methods:
 
1. get - visibility on the url
   -not well suitable for confidential data transfer
   -faster
   -lesser amount
   -query string - key -value pair q="node js documentation"- travel thru url
   -route param
   -route path
2. post
   -well suitable for confidentai data
   -request body
   -slower
   -huge amount
   -route param
   -route path
 
## Serving a static file:
 
loading the exact file using an end point
 
## Promise:
 
Async calls
Why?
PRomise: 3 states
Success/Resolve
Failure/Reject
Pending
 
functions of promises
.then() => Success
.catch() =>Failure
.finally() => gets executed all the time irrespective of the status of the promise obj
 
Promise obj syntax:
.then(()=>{})
.catch(()=>{})
.finally(()=>{})
 
 
 new Promise((success, failure) => {
  logic=>success() or failure()
});
 
 
Reason for promises:
--------------------
Callback hell: (nested callback with 4+ levels)
()=>{
.........
..........
   ()=>{
 
................
      ()=>{
         ......
         ......
 
         ()=>{
            .....
            ......
            .......
            ()=>{
               .....
               .....
               .....
            }
            .......
         }
         ......
         ......
         ()=>{
 
         }
         .....
      }
      .......
      .......
   }
   ...........
}
Database:
---------
RDBMS:
Tables => Rows & cols
relational - 1 to 1  1 to many.....
query
structured data
constraints - primary key, foreign key
Backup and recovery
Normalization
 
Mongo DB:
Collection -> Table
unstructured data
NO SQL DB
Key-value - JSON obj
Support for data type
no much constraint
best move with Node JS
Well on distributed system
 
Terms:
Mongo Server - DB server
mongodb module- driver
Mongo Compass- tool to connect to db server
Mongo client=>node js application, mongo compass, command prompt(mongo)
 
 
When to Use RDBMS:
Banking Systems:
 
Example: A banking application that handles transactions, accounts, and customer information.
Reason: RDBMS is ideal for applications requiring complex queries, transactions, and data integrity. The structured schema and ACID (Atomicity, Consistency, Isolation, Durability) properties ensure reliable and consistent data management.
E-commerce Platforms:
 
Example: An online store that manages product inventory, customer orders, and payment processing.
Reason: RDBMS can efficiently handle relationships between different entities (e.g., customers, orders, products) and ensure data consistency across multiple tables.
Human Resources Management Systems (HRMS):
 
Example: A system that manages employee records, payroll, and benefits.
Reason: RDBMS provides robust support for complex queries and reporting, which is essential for HR analytics and compliance.
When to Use MongoDB:
Content Management Systems (CMS):
 
Example: A CMS that stores and manages various types of content, such as articles, images, and videos.
Reason: MongoDB's flexible schema allows for easy storage and retrieval of diverse content types without the need for a predefined structure.
Real-Time Analytics:
 
Example: A real-time analytics platform that collects and analyzes large volumes of data from various sources, such as social media feeds or IoT devices.
Reason: MongoDB can handle high write loads and scale horizontally, making it suitable for real-time data ingestion and analysis.
Mobile Applications:
 
Example: A mobile app that stores user preferences, activity logs, and session data.
Reason: MongoDB's document-oriented storage is well-suited for handling unstructured or semi-structured data, which is common in mobile applications.
In summary, use RDBMS when you need structured data, complex queries, and strong data integrity. Use MongoDB when you need flexibility, scalability, and the ability to handle unstructured or semi-structured data.
 
Unstructured Data:
Text Documents:
 
Example: Word documents, PDFs, emails, and text files.
Characteristics: These documents contain text that does not follow a specific format or structure.
Multimedia Files:
 
Example: Images, videos, and audio files.
Characteristics: These files contain rich media content that is not organized in a predefined manner.
Social Media Posts:
 
Example: Tweets, Facebook posts, Instagram captions, and comments.
Characteristics: These posts are free-form text and multimedia content created by users without a fixed structure.
Web Pages:
 
Example: HTML pages, blog posts, and news articles.
Characteristics: Web pages often contain a mix of text, images, and other media elements without a consistent structure.
Sensor Data:
 
Example: Data from IoT devices, such as temperature readings, motion sensors, and GPS coordinates.
Characteristics: Sensor data can be continuous streams of information that do not follow a specific format.
Semi-Structured Data:
JSON (JavaScript Object Notation):
 
Example: API responses, configuration files, and data interchange between web services.
Characteristics: JSON data is organized in key-value pairs, making it easier to parse and understand, but it does not have a fixed schema.
XML (eXtensible Markup Language):
 
Example: RSS feeds, SOAP messages, and configuration files.
Characteristics: XML data is organized in a hierarchical structure with tags, but the schema can vary.
CSV (Comma-Separated Values):
 
Example: Spreadsheet data, export files from databases, and log files.
Characteristics: CSV data is organized in rows and columns, but the structure can vary, and it may not enforce data types.
Email Metadata:
 
Example: Email headers containing information like sender, recipient, subject, and timestamps.
Characteristics: Email metadata follows a semi-structured format with predefined fields, but the content of the email body is unstructured.
Log Files:
 
Example: Server logs, application logs, and system logs.
Characteristics: Log files often contain timestamped entries with a mix of structured and unstructured information.
 
Mongoose:
---------
A module in Node js
help us in connecting to db and perform db operation
Mongoose is not a db
mongoose can restrict or impose certain constraints on the data that needs to be stored on to the db
mongoose connect to mongoserver
mongoose have mongodb inside that
 
 
Async & Await:
*async call only
*await->async
*await-> process which would be time taking - async call
*async-> function
 


Local Module 
--------------------------
* user created module 
* for your business specific requirement
* reuse the functionalities or re use the code 
* imported using - require ('file path./module_name)
* segregate 

Express generator:
-------------------
