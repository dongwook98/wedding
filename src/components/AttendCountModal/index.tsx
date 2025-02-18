import { useEffect, useRef } from 'react';

import { useModalContext } from '@contexts/ModalContext';
import { Wedding } from '@/models/wedding';

export default function AttendCountModal({ wedding }: { wedding: Wedding }) {
  const { close, open } = useModalContext();

  const $input = useRef<HTMLInputElement>(null);

  const haveSeenModal = localStorage.getItem('@have-seen-modal');

  useEffect(() => {
    if (haveSeenModal === 'true') {
      return;
    }

    open({
      title: `현재 참석자: ${wedding.attendCount}명`,
      body: (
        <div>
          <input
            ref={$input}
            type='number'
            placeholder='참석 가능 인원을 추가해주세요.'
            style={{ width: '100%' }}
          />
        </div>
      ),
      onLeftButtonClick: () => {
        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
      onRightButtonClick: async () => {
        if ($input.current === null) {
          return null;
        }

        await fetch('http://localhost:8888/wedding', {
          method: 'PUT',
          body: JSON.stringify({
            ...wedding,
            attendCount: wedding.attendCount + Number($input.current.value),
          }),
        });

        localStorage.setItem('@have-seen-modal', 'true');
        close();
      },
    });
  }, [close, haveSeenModal, open, wedding]);

  return null;
}
