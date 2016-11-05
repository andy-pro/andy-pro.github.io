// define(() => new Object({
define(() => ({
  main: `
    <div class="todo">
      <div class="todo__header">
        <span>TO</span><span> DO</span><span> LIST</span></div>
      <form>
        <input type="text" class="todo__input" title="Добавить новое дело" required autofocus>
      </form>
      <ul class="todo__list"></ul>
      <div class="todo__status"></div>
    </div>
    `,
  list: `
    <% for (var i = 0; i < items.length; i++) {
      var item = items[i]; %>
      <li>
        <span class="close" title="Удалить"></span>
        <label class="jq-checkbox">
          <input type="checkbox"
            class="todo__state"
            <%=item.done ? "checked" : ""%>
          >
          <span class="jq-checkbox__img" title="<%=item.done ? 'Продолжить' : 'Завершить'%>"></span>
          <input type="text" title="Редактировать"
            class="todo__title todo__title--<%=item.done ? 'done' : 'pending'%>"
            value="<%=item.title%>"
            placeholder="Введите хоть что-нибудь"
          >
        </label>
      </li>
    <% } %>
  `
  })
);
