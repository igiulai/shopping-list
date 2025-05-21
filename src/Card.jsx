import './Card.css';

export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
}) => {
  const handleTitleChange = (event) => {
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = () => {
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  return (
    <form className="card" onSubmit={(e) => e.preventDefault()}>
      <input
        className="card__done"
        type="checkbox"
        checked={done}
        onChange={handleCheckboxChange}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleCheckboxChange();
          }
        }}
        tabIndex={0}
      />
      <input
        className="card__title"
        type="text"
        value={title}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
        autoFocus={title === ''} // Focus if empty
      />
    </form>
  );
};