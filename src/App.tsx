import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './App.module.scss';
import FullScreenMessage from './components/shared/FullScreenMessage';

const cx = classNames.bind(styles);

function App() {
  const [wedding, setWedding] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true);

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        // fetch는 404에러를 만나면 에러를 리젝하지 않아서 명시적으로 에러를 throw해야함
        if (response.ok === false) {
          throw new Error('청접장 정보를 불러오지 못했습니다.');
        }
        return response.json();
      })
      .then((data) => {
        setWedding(data);
      })
      .catch((e) => {
        console.log('에러발생', e);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <FullScreenMessage type='loading' />;
  }

  if (error) {
    return <FullScreenMessage type='error' />;
  }

  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>;
}

export default App;
