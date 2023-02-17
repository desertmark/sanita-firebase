import { Layout } from '@components/Layout';
import { Text } from '@components/Text';
import { Providers } from '@providers/providers';

export function App() {
  return (
    <Providers>
      <Layout>
        <Text>Hello World 2</Text>
      </Layout>
    </Providers>
  );
}

export default App;
