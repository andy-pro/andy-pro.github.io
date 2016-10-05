# Урок 20

Домашнее задание:

Скопировать себе в script.js [data.json](/js_19-20/data.json), сделать из него обычный javascript-массив (распарсить). С помощью `lodash` получить несколько массивов: 1. Массив скиллов (поле skills) всех людей, не должно быть повторяющихся скиллов, также они должны быть отсортированы по алфавиту; 2. Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (friends); 3. Массив всех друзей всех пользователей, не должно быть повторяющихся людей


#### Installation
```
npm install
```

#### Build

- ```npm run pub``` - for publication (*minimized*)  

- ```npm run dev``` or ```gulp``` - for development (*watch, source map*)


#### Code analysis [tool](http://jshint.com/)

- ```npm run jshint``` or ```gulp jshint```

---

Полезные материалы:

1. [Документация lodash](https://lodash.com/)
2. [lodash (underscore) — знай свою стандартную библиотеку](https://habrahabr.ru/post/217515/)
3. [Хватит писать циклы for. Пришло время использовать Underscore](http://frontender.info/stop-writing-for-loops-start-using-underscorejs/)
4. [Lodash: 10 Javascript Utility Functions That You Should Probably Stop Rewriting](http://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting)
5. [Введение в Source Maps](https://habrahabr.ru/post/178743/)
