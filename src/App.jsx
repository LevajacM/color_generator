import { useState } from 'react';
import Form from './components/Form';
import ColorList from './components/ColorList';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [color, setColor] = useState('#f15025');
  const [colors, setColors] = useState(new Values(color).all(10));

  const setNewColor = (newColor) => {
    try {
      setColors(new Values(newColor).all(10));
      setColor(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form setNewColor={setNewColor} color={color} />
      <ColorList colors={colors} />
      <ToastContainer position='top-center' />
    </main>
  );
};
export default App;
