import React, { useState, useEffect } from 'react';

const CertificateList = ({ goods, onSelect }) => {
    return (
      <div>
        <h1>Список сертификатов</h1>
        {goods.map((good) => (
          <div key={good.Id}>
            <h2>{good.Name}</h2>
            <p>{good.Description}</p>
            <p>{good.Price} Руб.</p>
            <button onClick={() => onSelect(good)}>Оформить</button>
          </div>
        ))}
      </div>
    );
  };

export default CertificateList;