"use client";

import { useMemo, useState } from "react";
import { movies, moodOptions, type Mood, type Movie } from "@/app/lib/movies";

function MovieCard({ movie, onPlay, number }: { movie: Movie; onPlay: (movie: Movie) => void; number: string }) {
  return (
    <button className="movie-card" onClick={() => onPlay(movie)} aria-label={`Открыть фильм ${movie.title}`}>
      <span className={`poster ${movie.poster}`}>
        <span className="poster-grain" />
        <span className="poster-top"><span>{movie.genre}</span><span>{number}</span></span>
        <span className="poster-bottom"><span className="poster-title">{movie.title}</span><span className="poster-meta">{movie.duration} <i>·</i> AI FILM</span></span>
        <span className="poster-play" aria-hidden="true">▶</span>
      </span>
      <span className="movie-card-caption"><span>{movie.director}</span><span>↗</span></span>
    </button>
  );
}

export default function MovieExperience() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [selected, setSelected] = useState<Movie | null>(null);
  const [query, setQuery] = useState("");
  const recommendation = useMemo(() => mood ? movies.find((movie) => movie.moods.includes(mood)) ?? null : null, [mood]);
  const filtered = useMemo(() => movies.filter((movie) => `${movie.title} ${movie.genre} ${movie.director}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <>
      <section className="mood-section section-pad" id="mood">
        <div className="section-kicker"><span>01 / ТВОЙ ВЕЧЕР</span><span>ПОДБОР В ОДНО КАСАНИЕ</span></div>
        <div className="mood-layout">
          <div className="mood-intro"><p className="eyebrow">Кино начинается с чувства</p><h2>Что у тебя<br />на <em>душе?</em></h2><p className="muted">Не нужно листать бесконечно. Выбери настроение — и мы найдём историю, которая попадёт в точку.</p></div>
          <div className="mood-widget"><div className="widget-top"><span className="spark-icon">✳</span><div><b>Твой персональный кинопроводник</b><small>Выбери одно — рекомендация появится сразу</small></div><span className="ai-chip">SANA AI <i>LIVE</i></span></div>
            <div className="mood-options">{moodOptions.map((option) => <button key={option.id} className={`mood-option ${mood === option.id ? "is-active" : ""}`} onClick={() => setMood(option.id)}><span>{option.icon}</span>{option.label}</button>)}</div>
            {recommendation ? <div className="recommendation"><div className={`recommendation-art ${recommendation.poster}`}><span>ПОДОБРАНО ДЛЯ ТЕБЯ</span></div><div className="recommendation-copy"><span className="eyebrow">ТВОЙ СЛЕДУЮЩИЙ ФИЛЬМ</span><h3>{recommendation.title}</h3><p>{recommendation.description}</p><button className="text-link" onClick={() => setSelected(recommendation)}>Смотреть фильм <span>↗</span></button></div><span className="match-score">98%<small>match</small></span></div> : <div className="recommendation empty-rec"><span className="rec-orbit">✳</span><span>Твой фильм уже где-то рядом.<br /><b>Назови настроение.</b></span><span className="rec-arrow">↙</span></div>}
          </div>
        </div>
      </section>
      <section className="films-section section-pad" id="films"><div className="section-kicker"><span>02 / КОЛЛЕКЦИЯ</span><span>КОРОТКОЕ КИНО. ДОЛГОЕ ПОСЛЕВКУСИЕ.</span></div><div className="films-heading"><div><p className="eyebrow">Истории, которых ещё не было</p><h2>Смотри <em>иначе.</em></h2></div><label className="catalog-search"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти историю" aria-label="Найти фильм" /></label></div><div className="film-grid">{filtered.map((movie, index) => <MovieCard key={movie.id} movie={movie} number={`0${index + 1}`} onPlay={setSelected} />)}</div>{filtered.length === 0 && <p className="no-results">Ничего не нашлось. Попробуй другой запрос.</p>}<div className="collection-foot"><span>ПОДБОРКА ОБНОВЛЯЕТСЯ</span><span>6 ИСТОРИЙ <i>✳</i> БОЛЬШЕ СКОРО</span></div></section>
      {selected && <div className="film-modal" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}><div className="film-modal-box" onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelected(null)} aria-label="Закрыть">×</button><div className={`modal-art ${selected.poster}`}><div className="modal-art-glow"/><div className="modal-title"><span>SANA ORIGINAL · AI FILM</span><h2>{selected.title}</h2><p>{selected.genre} · {selected.duration} · {selected.director}</p><div className="demo-notice">ДЕМО-ПРОСМОТР · ВИЗУАЛЬНЫЙ ЭТЮД</div></div><span className="modal-play">▶</span><div className="modal-controls"><span>00:00</span><i><b/></i><span>{selected.duration.replace(" мин", ":00")}</span></div></div><div className="modal-description"><span>О ФИЛЬМЕ</span><p>{selected.description}</p><small>Демонстрационная витрина платформы SANA. Видео и AI-подбор подключаются к каталогу проекта.</small></div></div></div>}
    </>
  );
}
