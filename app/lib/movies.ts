export type Mood = "wonder" | "inspire" | "calm" | "think" | "joy";

export type Movie = {
  id: string;
  title: string;
  director: string;
  genre: string;
  duration: string;
  description: string;
  poster: string;
  moods: Mood[];
  featured?: boolean;
};

export const movies: Movie[] = [
  {
    id: "last-light",
    title: "Последний свет",
    director: "Алия Садыкова",
    genre: "Фантастика",
    duration: "08 мин",
    description: "Когда погасли все города, одинокий маяк продолжает звать кого-то домой.",
    poster: "poster-sunset",
    moods: ["wonder", "inspire"],
    featured: true,
  },
  {
    id: "garden-memory",
    title: "Сад, который помнит",
    director: "Тимур Омаров",
    genre: "Магический реализм",
    duration: "06 мин",
    description: "Старый сад хранит каждое доброе слово, сказанное под его деревьями.",
    poster: "poster-garden",
    moods: ["calm", "joy"],
  },
  {
    id: "city-dreams",
    title: "Город на краю сна",
    director: "Мадина Касым",
    genre: "Sci-fi",
    duration: "05 мин",
    description: "Ночью улицы Семей меняются местами. Кто-то должен найти дорогу обратно.",
    poster: "poster-city",
    moods: ["wonder", "think"],
  },
  {
    id: "tomorrow-letter",
    title: "Письмо из завтра",
    director: "Арман Бек",
    genre: "Драма",
    duration: "04 мин",
    description: "Голос из будущего напоминает: иногда достаточно просто начать.",
    poster: "poster-letter",
    moods: ["think", "inspire"],
  },
  {
    id: "quiet-orbit",
    title: "Орбита тишины",
    director: "Дана Ермек",
    genre: "Фантастика",
    duration: "07 мин",
    description: "На дальней станции космонавт слышит музыку в сигналах звёзд.",
    poster: "poster-orbit",
    moods: ["calm", "wonder"],
  },
  {
    id: "soft-tomorrow",
    title: "Завтра будет мягче",
    director: "Асем Нур",
    genre: "Анимация",
    duration: "03 мин",
    description: "Случайная встреча превращает совершенно обычный день в тёплую историю.",
    poster: "poster-soft",
    moods: ["joy", "calm"],
  },
];

export const moodOptions: { id: Mood; label: string; icon: string }[] = [
  { id: "wonder", label: "Удивиться", icon: "✳" },
  { id: "inspire", label: "Вдохновиться", icon: "↗" },
  { id: "calm", label: "Выдохнуть", icon: "☾" },
  { id: "think", label: "Задуматься", icon: "◌" },
  { id: "joy", label: "Улыбнуться", icon: "✺" },
];
