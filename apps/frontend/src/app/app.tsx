import { Layout } from '@components/Layout';
import { Screen } from '@components/Screen';
import { Providers } from '@providers/providers';
import { ProductsView } from '@src/views/Products';

export function App() {
  return (
    <Providers>
      <Layout>
        <ProductsView />
      </Layout>
    </Providers>
  );
}

export default App;
