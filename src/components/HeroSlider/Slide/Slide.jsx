import s from './Slide.module.scss';

export default function Slide({ content }) {
  return (
    <div className={s.slide}>
      <img src={content} alt="slide" />
    </div>
  )
}