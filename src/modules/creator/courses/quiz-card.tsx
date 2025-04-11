//@ts-nocheck
const QuizCard = ({ quiz }:any) => {
    return (
      <div className="bg-white shadow-md rounded-2xl p-6 mb-6 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800">Question:</h2>
          <span className="text-sm text-gray-500">
            Score: <span className="font-bold text-indigo-600">{quiz.score}</span>
          </span>
        </div>
        <p className="text-gray-700 mb-4">{quiz.question}</p>
  
        <div className="grid grid-cols-2 gap-4 mb-4">
          {Object.entries(quiz.options).map(([key, value]) => (
            <div
              key={key}
              className={`p-3 rounded-xl border ${
                key === quiz.correctOption
                  ? 'border-green-500 bg-green-50 text-black bg-lightPrimary font-medium'
                  : 'border-gray-300 bg-gray-50 text-gray-700'
              }`}
            >
              <span className="font-semibold mr-2">{key}.</span> {value}
            </div>
          ))}
        </div>
  
        <div className="text-sm text-gray-900 flex flex-col md:flex-row md:justify-between">
          <div>Quiz ID: {quiz.lessonQuizId}</div>
          <div>Created At: {new Date(quiz.createdAt).toLocaleString()}</div>
        </div>
      </div>
    );
  };

  export default QuizCard
  