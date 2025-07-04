import { useState } from 'react';
import data from './data';
import Questions from './components/questions';

const App = () => {
  const [questions, setQuestions] = useState(data);
  console.log(questions);

  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
