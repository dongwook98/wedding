import { useQuery } from 'react-query';

import { getWedding } from '@/api/wedding';
import { Wedding } from '@/models/wedding';

export default function useWedding() {
  // react-query 적용해서 선언적으로 코드 관리
  const { data, isLoading, error } = useQuery<Wedding>(
    ['wedding'],
    () =>
      getWedding().then((response) => {
        // ! fetch는 404 에러를 만나면 에러를 리젝하지 않아서 명시적으로 에러를 throw 해야함
        if (response.ok === false) {
          throw new Error('청접장 정보를 불러오지 못했습니다.');
        }
        return response.json();
      }),
    {
      suspense: true, // suspense 방출
    }
  );

  return { wedding: data, isLoading, error };
}
