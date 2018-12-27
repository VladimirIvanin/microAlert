# Уведомления

```js
microAlert('Текст', 3000, {
  css: {
    color: '#fff',
    background: '#000',
    borderColor: '#000'
  },
  modificator: 'info'
})
```

## Параметры

> microAlert(message, user_timeout, options)

`message` - сообщение (можно передать html строку)

`user_timeout` - время показа в миллисекундах

`options` -  настройки

`options.css` -  css стили

`options.modificator` - добавление уникального класса для блока (к названию класса будет добавляться префикс 'is-'. Например warning => is-warning)

## Прописанные в css модификации

```js
// Без модификации
microAlert('info', 5000);
// C модификациями
microAlert('⚠ warning', 5000, {modificator: 'warning'});
microAlert('✓ success', 5000, {modificator: 'success'});
microAlert('⚠ danger', 5000, {modificator: 'danger'});
```
