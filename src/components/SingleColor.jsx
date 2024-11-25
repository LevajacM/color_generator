import { toast } from 'react-toastify';

function SingleColor({ item }) {
  const { weight, type, hex } = item;
  const shade = type === 'shade';

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard');
      } catch (error) {
        toast.error(`Copy to clipboard failed`);
      }
    } else {
      toast.error(`Can't access clipboard`);
    }
  };

  return (
    <article
      className={shade ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>#{hex}</p>
    </article>
  );
}

export default SingleColor;
