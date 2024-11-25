import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

function ColorList({ colors }) {
  return (
    <section className='colors'>
      {colors.map((item) => {
        return <SingleColor key={nanoid()} item={item} />;
      })}
    </section>
  );
}

export default ColorList;
