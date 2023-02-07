import * as React from 'react';
import { fetchFacts, MenFactsType } from './men-facts';

type FormProps = {
  onSubmit: (n: number) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [value, setValue] = React.useState(1);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Men Facts</label>
        <input
          type="number"
          value={value}
          min="1"
          max="10"
          id="number-of-facts"
          onChange={(event) => setValue(+event.target.value)}
        />
      </div>
      <input type="submit" value="Fetch Men Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="man-fact">
      <h3>Man Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const App = () => {
  const [facts, setFacts] = React.useState<MenFactsType[]>([]);

  const handleSubmit = (n: number) =>
    fetchFacts(n).then((facts) => setFacts(facts));

  return (
    <main>
      <Form onSubmit={handleSubmit} />
      <section>
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
};

export default App;
