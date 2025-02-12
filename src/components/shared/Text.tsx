// <Text>{'안녕하세요\n줄바꿈이되나요?'}</Text>

import React from 'react';

// \n 줄바꿈 지원하는 컴포넌트
function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    );
  });

  console.log(message);

  return <div>{message}</div>;
}

export default Text;
