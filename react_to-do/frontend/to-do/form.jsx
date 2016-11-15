'use strict';

export default function TodoForm({onSubmit}) {
  let input;
  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (input.value) {
        onSubmit(input.value);
        input.value = '';
      }
    }}>
      <input type="text"
        className="todo__input"
        title="Добавить новое дело"
        ref={el => input = el}
        autoFocus
        required
      />
    </form>
  );
}
