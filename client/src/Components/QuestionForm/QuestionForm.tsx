import React from 'react';

interface QuestionFormProps {
  onSubmit: (question: string) => void;
  onQuestionChange: (question: string) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({ onSubmit, onQuestionChange }) => {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onQuestionChange(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Ask Your Question:</label>
      <input 
        type="text" 
        id="question" 
        value={inputValue} 
        onChange={handleInputChange} 
      />
      <button type="submit">Ask</button>
    </form>
  );
};

export default QuestionForm;
