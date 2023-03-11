import { useState } from "react";
import "./App.css";

interface Options {
  good: boolean;
  cheap: boolean;
  fast: boolean;
}

const App: React.FC = () => {
  const [options, setOptions] = useState<Options>({
    good: false,
    cheap: false,
    fast: false,
  });

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const clicked = e.target.id as keyof Options;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [clicked]: !prevOptions[clicked],
    }));
    if (
      options.good &&
      options.cheap &&
      options.fast &&
      clicked !== "good" &&
      clicked !== "cheap" &&
      clicked !== "fast"
    ) {
      const newOptions: Options = {
        good: false,
        cheap: false,
        fast: false,
      };
      setOptions(newOptions);
      setOptions((prevOptions) => ({
        ...prevOptions,
        [clicked]: true,
      }));
    }
  };

  return (
    <div className="container">
      <h2>How do you want your project to be?</h2>
      <div className="toggle-container">
        <input
          type="checkbox"
          id="good"
          className="toggle"
          checked={options.good}
          onChange={handleToggle}
        />
        <label htmlFor="good" className="label">
          <div className="ball"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="cheap"
          className="toggle"
          checked={options.cheap}
          onChange={handleToggle}
        />
        <label htmlFor="cheap" className="label">
          <div className="ball"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-container">
        <input
          type="checkbox"
          id="fast"
          className="toggle"
          checked={options.fast}
          onChange={handleToggle}
        />
        <label htmlFor="fast" className="label">
          <div className="ball"></div>
        </label>
        <span>Fast</span>
      </div>
    </div>
  );
};

export default App;
