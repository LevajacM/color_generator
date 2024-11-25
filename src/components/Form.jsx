import { useState } from 'react';

function Form({ color, setNewColor }) {
  const [colorValue, setColorValue] = useState(color);

  const handleTextChange = (e) => {
    setColorValue(e.target.value);
  };
  const handleColorChange = (e) => {
    setNewColor(colorValue);
    // handleTextChange(e);
    setColorValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewColor(colorValue);
  };

  return (
    <section className='container'>
      <h4>color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input type='color' value={color} onChange={handleColorChange} />
        <input type='text' value={colorValue} onChange={handleTextChange} />
        <button
          type='submit'
          // placeholder={color}
          className='btn'
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
}

export default Form;
