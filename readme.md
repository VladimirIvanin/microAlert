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
