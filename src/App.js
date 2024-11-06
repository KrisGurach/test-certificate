import React, { useState, useEffect } from 'react';
import CertificateList from './components/CertificateList';
import ContactForm from './components/ContactForm';

const App = () => {
  const [goods, setGoods] = useState([]);
  const [selectedGood, setSelectedGood] = useState(null);
  const [currentPage, setCurrentPage] = useState('goods');

  const options = {
    ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
    MethodName: "OSGetGoodList",
  };

  useEffect(() => {
    const fetchGoods = async (options) => {
      const res = await fetch('https://sycret.ru/service/api/api?MethodName=OSGetGoodList&ismob=0&ApiKey=011ba11bdcad4fa396660c2ec447ef14', {
        method: 'GET',
        // headers: {
        // //   'Content-Type': 'application/json',
        // //   'Access-Control-Allow-Origin': '*',
        // },
        // body: JSON.stringify(options),
      });
      if (!res.ok) {
        return Promise.reject(new Error(`${res.status}`));
      }
      return res.json();
    };

    fetchGoods(options).then((data) => {
      setGoods(data.data);
    })
    .catch((error) => console.error(error));
  }, []);

  const handleSelectGood = (good) => {
    setSelectedGood(good);
    setCurrentPage('contactForm');
  };

  return (
    <div>
      {currentPage === 'goods' ? (
        <CertificateList goods={goods} onSelect={handleSelectGood} />
      ) : (
        <ContactForm good={selectedGood} />
      )}
    </div>
  );
};

export default App;