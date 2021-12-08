import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <input
        className={s.Input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
