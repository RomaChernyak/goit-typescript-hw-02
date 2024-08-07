/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

function pairGenerator<K, V>(key: K, value: V): KeyValuePair<K, V> {
  return {
    key,
    value,
  };
}

pairGenerator('Some text', false);
pairGenerator(200, 'OK');

export {};