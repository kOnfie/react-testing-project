У проєкті використовую архітектуру FSD.
По стеку: React, TypeScript, React Router DOM, SCSS

ЗАВДАННЯ 1: Підключити роутинг

- У папці 'app/' створюю папку '/routes', а тут створюю файл 'router.tsx' та налаштовую у ньому маршрути
  - Створюємо <Layout>, <UserEdit>, <UserList> та тримаємо у папці 'pages/' звідки будемо експортувати
  - Компонент <Layout> буде на кожній сторінці у тегу <header>, <UserEdit> та <UserList> будуть сторінками у тегу <main>
  - Підключаємо їх через <Outlet />
  - Експортуємо router та підключаємо у файлі main.tsx

ЗАВДАННЯ 2: Підключити стилі

- Створюю основний файл зі стилями global.scss та підклчаю його у main.tsx
- Створюю файли variables.scss, reset.scss. Налаштовую їх та підключаю до основного файлу. Також додаю мінімальні загальні стилі до body

ЗАВДАННЯ 3: Зверстати <Layout>

- Створюю та верстаю компонент <Header> який буде шапкою. Створюю папку widgets та кладемо його туди, так як <Header> є самостійним блоком
- Створюю та верстаю компонент <Link> щоб використати його у <Header> для перемиканням між сторінками. Кладу його у папку 'shared/ui/' так як цей компонент буду перевикористовувати

ЗАВДАННЯ 4: Зверстати сторінку <UserEdit>
 - Добавляю title до сторінки та верстаю його
 - Створюю компонент <Select>. Це буде перевикористаний компонент, який дає можливість користувачу обирати те, що йому потрібно. Кладу його у папку 'shared/ui/'.
 - Верстаю <Select>