import React from 'react';
import questionImg from '../images/qw.jpg';

const EmptyDescription = () => {
  return (
    <figure className="Description-items-name">
      <img className="unpickedItem" src={questionImg} alt="question" />
      <figcaption>Послушайте плеер. Выберите птицу из списка</figcaption>
    </figure>
  );
};

export default EmptyDescription;
