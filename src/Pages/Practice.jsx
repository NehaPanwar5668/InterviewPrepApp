import React, { useState } from 'react';


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

const Practice = ({ darkMode }) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
      setShowAnswer(false);
    }
  };

  return (
    <div className={`max-w-2xl mx-auto px-4 py-20 ${
      darkMode ? 'text-white' : 'text-gray-900'
    }`}>

      <div className={`rounded-3xl shadow-2xl p-8 lg:p-12 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>

      
        <div className="text-center mb-12">
          <h1 className={`text-3xl lg:text-4xl font-bold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Practice Questions
          </h1>

          <div className={`w-full rounded-full h-2 ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          <p className={`mt-2 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className={`rounded-2xl p-8 mb-8 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h2 className="text-xl lg:text-2xl font-semibold mb-8">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                disabled={showAnswer}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 text-left rounded-xl transition-all border-2 ${
                  showAnswer
                    ? option === question.answer
                      ? 'bg-green-100 border-green-400 text-green-800'
                      : selectedOption === option
                      ? 'bg-red-100 border-red-400 text-red-800'
                      : darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-200'
                    : darkMode
                    ? 'bg-gray-700 border-gray-600 hover:border-blue-400 text-white'
                    : 'bg-white border-gray-200 hover:border-blue-300 hover:scale-105'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

  
        {showAnswer && (
          <>
            <div className={`border-2 rounded-2xl p-6 mb-6 ${
              darkMode ? 'bg-green-900 border-green-600' : 'bg-green-50 border-green-200'
            }`}>
              <h3 className="text-lg font-semibold mb-2">✅ Correct Answer:</h3>
              <p>{question.answer}</p>
            </div>

            <div className={`border-2 rounded-2xl p-6 ${
              darkMode ? 'bg-purple-900 border-purple-600' : 'bg-purple-50 border-purple-200'
            }`}>
              <h3 className="text-lg font-semibold mb-4">🤖 AI Explanation</h3>
              <p>{question.explanation}</p>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={nextQuestion}
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
              >
                Next Question →
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default Practice;