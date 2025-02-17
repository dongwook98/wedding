import { useEffect, useState } from 'react';

import { getWedding } from '@/api/wedding';
import { Wedding } from '@/models/wedding';

export default function useWedding() {
  const [wedding, setWedding] = useState<Wedding | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true);

    getWedding()
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

  return { wedding, loading, error };
}
