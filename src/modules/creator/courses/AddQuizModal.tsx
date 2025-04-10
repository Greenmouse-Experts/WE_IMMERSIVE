import { useState } from "react";
import { Trash2, PlusCircle } from "lucide-react";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { createQuiz } from "../../../api/creator";
import { toast } from "react-toastify";

const QuizCreator = ({ lessonQuizId, handleOpen }:{lessonQuizId:string;handleOpen:() => void;}) => {
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [question, setQuestion] = useState(""); // Add state for the question
  const { mutate: createquiz, isPending } = createQuiz();

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const addAnswer = () => {
    if (answers.length >= 4) return;
    setAnswers([...answers, ""]);
  };

  const removeAnswer = (index: number) => {
    const updatedAnswers = answers.filter((_, i) => i !== index);
    setAnswers(updatedAnswers);

    if (correctAnswerIndex !== null) {
      if (index === correctAnswerIndex) {
        setCorrectAnswerIndex(null);
      } else if (index < correctAnswerIndex) {
        setCorrectAnswerIndex(correctAnswerIndex - 1);
      }
    }
  };

  const handleCheckboxChange = (index: number) => {
    setCorrectAnswerIndex(index);
  };

  const handleSave = () => {
    if (correctAnswerIndex === null || !question) {
      toast.warn("Complete quiz before saving")
      return;
    }

    const options = {
      A: answers[0],
      B: answers[1],
      C: answers[2],
      D: answers[3],
    };

    const correctOption = ["A", "B", "C", "D"][correctAnswerIndex];
    
    const quizData = {
      lessonQuizId,
      question,
      options,
      correctOption,
      score: 5, // Adjust the score if needed
    };

    createquiz(quizData,{
      onSuccess:() =>{
        handleOpen()
      },
      onError:() =>{
        handleOpen()
      }
    });
  };

  return (
    <div className="p-6 rounded-xl bg-white w-full max-w-4xl mx-auto shadow-xl text-black">
      <h2 className="text-xl font-bold mb-6">Create Quiz</h2>

      <div className="border rounded-xl p-6 bg-violet-50">
        <div className="mb-4">
          <label className="block font-semibold text-lg mb-2">Question 1</label>
          <TextInput
            type={InputType["text"]}
            label=""
            placeholder="Write your question here"
            value={question}
            onChange={(e:any) => setQuestion(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-2 unbound text-black">
            Answers{" "}
            <span className="text-sm font-normal unbound text-[#9D9D9D]">
              - Choose One correct answer
            </span>
          </h3>

          {answers.map((answer, index) => (
            <div key={index} className="flex items-center gap-2 mb-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                placeholder={`Answer ${index + 1}`}
                className="flex-grow p-2 bg-violet-100 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#E9EBFB] placeholder:text-xs placeholder:text-[#999797]"
              />
              <input
                type="checkbox"
                checked={correctAnswerIndex === index}
                onChange={() => handleCheckboxChange(index)}
                className="w-5 h-5 cursor-pointer"
              />
              <button onClick={() => removeAnswer(index)}>
                <Trash2 className="text-gray-600 hover:text-red-500" size={20} />
              </button>
            </div>
          ))}

          <button onClick={addAnswer} className="text-purple-600 flex items-center gap-2 mt-3">
            <PlusCircle size={20} />
            <span>Add Answer</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button className="text-gray-500 hover:underline">Cancel</button>
        <button
          onClick={handleSave}
          disabled={isPending}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
        >
          Save &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default QuizCreator;
