import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App.tsx';
import { ModalContext } from '@contexts/ModalContext.tsx';
import FullScreenMessage from '@shared/FullScreenMessage.tsx';

import './scss/global.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalContext>
        <Suspense fallback={<FullScreenMessage type='loading' />}>
          <App />
        </Suspense>
      </ModalContext>
    </QueryClientProvider>
  </StrictMode>
);
