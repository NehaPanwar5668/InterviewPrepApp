import React from 'react'


 const questions = [
  {
    id: 1,
    question: "What is the time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
    explanation: "Binary Search divides the array in half each step → O(log n)"
  },
  {
    id: 2,
    question: "Which data structure uses FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
    explanation: "Queue follows First In First Out (FIFO)"
  },
  {
    id: 3,
    question: "Which sorting algorithm is fastest on average?",
    options: ["Bubble Sort", "Selection Sort", "Quick Sort", "Insertion Sort"],
    answer: "Quick Sort",
    explanation: "Quick Sort has average time complexity O(n log n)"
  },
  {
    id: 4,
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
    answer: "Central Processing Unit",
    explanation: "CPU is the brain of the computer"
  },
  {
    id: 5,
    question: "Which layer of OSI model handles routing?",
    options: ["Transport", "Network", "Session", "Data Link"],
    answer: "Network",
    explanation: "Network layer is responsible for routing packets"
  },
  {
    id: 6,
    question: "What is the full form of DBMS?",
    options: ["Database Managing System", "Database Management System", "Data Backup Management System", "Data Base Making System"],
    answer: "Database Management System",
    explanation: "DBMS is used to store and manage data"
  },
  {
    id: 7,
    question: "Which SQL command is used to fetch data?",
    options: ["GET", "FETCH", "SELECT", "SHOW"],
    answer: "SELECT",
    explanation: "SELECT is used to retrieve data from database"
  },
  {
    id: 8,
    question: "Which data structure uses LIFO?",
    options: ["Queue", "Stack", "Array", "Tree"],
    answer: "Stack",
    explanation: "Stack follows Last In First Out (LIFO)"
  },
  {
    id: 9,
    question: "What is the default port of HTTP?",
    options: ["21", "80", "443", "25"],
    answer: "80",
    explanation: "HTTP runs on port 80"
  },
  {
    id: 10,
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: "CSS",
    explanation: "CSS is used to style web pages"
  },
  {
    id: 11,
    question: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: "2NF",
    explanation: "2NF removes partial dependency"
  },
  {
    id: 12,
    question: "What is RAM?",
    options: ["Read Only Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"],
    answer: "Random Access Memory",
    explanation: "RAM is temporary memory used by CPU"
  },
  {
    id: 13,
    question: "Which protocol is used to send emails?",
    options: ["HTTP", "FTP", "SMTP", "TCP"],
    answer: "SMTP",
    explanation: "SMTP is used for sending emails"
  },
  {
    id: 14,
    question: "Which data structure is used in recursion?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    answer: "Stack",
    explanation: "Recursion uses call stack"
  },
  {
    id: 15,
    question: "Which key is used to uniquely identify a record?",
    options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"],
    answer: "Primary Key",
    explanation: "Primary key uniquely identifies each record"
  },
  {
    id: 16,
    question: "What is the worst-case time complexity of Bubble Sort?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(n log n)"],
    answer: "O(n²)",
    explanation: "Bubble sort compares all elements repeatedly"
  },
  {
    id: 17,
    question: "Which HTTP method is used to create data?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "POST",
    explanation: "POST is used to create new data"
  },
  {
    id: 18,
    question: "Which component is brain of computer?",
    options: ["RAM", "Hard Disk", "CPU", "Monitor"],
    answer: "CPU",
    explanation: "CPU controls all operations"
  },
  {
    id: 19,
    question: "Which traversal uses DFS?",
    options: ["Level Order", "Breadth First", "Depth First", "None"],
    answer: "Depth First",
    explanation: "DFS = Depth First Search"
  },
  {
    id: 20,
    question: "Which is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "HTML",
    explanation: "HTML is a markup language"
  },
  {
    id: 21,
    question: "Which device is used to connect networks?",
    options: ["Router", "Monitor", "Keyboard", "Mouse"],
    answer: "Router",
    explanation: "Router connects multiple networks"
  },
  {
    id: 22,
    question: "Which keyword is used in Java to inherit class?",
    options: ["implements", "extends", "inherits", "super"],
    answer: "extends",
    explanation: "extends is used for inheritance in Java"
  },
  {
    id: 23,
    question: "Which data structure is used for BFS?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
    explanation: "BFS uses queue"
  },
  {
    id: 24,
    question: "Which OS is open source?",
    options: ["Windows", "Linux", "MacOS", "DOS"],
    answer: "Linux",
    explanation: "Linux is open source"
  },
  {
    id: 25,
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//",
    explanation: "// is used for single line comment"
  },
  {
    id: 26,
    question: "Which SQL clause is used to filter data?",
    options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"],
    answer: "WHERE",
    explanation: "WHERE filters records"
  },
  {
    id: 27,
    question: "Which memory is permanent?",
    options: ["RAM", "Cache", "ROM", "Register"],
    answer: "ROM",
    explanation: "ROM is non-volatile memory"
  },
  {
    id: 28,
    question: "Which topology uses central hub?",
    options: ["Ring", "Bus", "Star", "Mesh"],
    answer: "Star",
    explanation: "Star topology uses central hub"
  },
  {
    id: 29,
    question: "Which operator is used for equality in JS?",
    options: ["=", "==", "===", "!="],
    answer: "===",
    explanation: "=== checks value + type"
  },
  {
    id: 30,
    question: "Which sorting algorithm is stable?",
    options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
    answer: "Merge Sort",
    explanation: "Merge sort is stable and O(n log n)"
  }
];
const Api = () => {
  return (
    <div>
      
    </div>
  )
}

export default Api
