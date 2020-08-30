import React from 'react';

const Modal = ({ finalData, onClick }) => {
  return (
    <>
      <h2>Результаты игры</h2>
      <div>
       <h2>Вы набрали: {finalData.score} </h2>
       <h3>Максимальное колличество баллов: {finalData.maxScore}</h3>  
      </div>
      <img src={finalData.img} alt="finish play" />
      <div>
      <button className="btn-play" onClick={() => onClick()}> ИГРАТЬ </button>
      </div>
    </>
  );
};

export default Modal;
