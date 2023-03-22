import { Suspense } from 'react';

import { createBrowserHistory } from 'history';
import { QueryClient, QueryClientProvider } from 'react-query';

import CustomRouter from './wrappers/CustomRouter';
import RootComponent from './wrappers/Root';
import { AppProvider } from '@/context';

export const hashHistory = createBrowserHistory();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, cacheTime: 12 * 60 * 1000, retry: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <CustomRouter history={hashHistory}>
          <Suspense fallback={null}>
            <RootComponent />
          </Suspense>
        </CustomRouter>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
