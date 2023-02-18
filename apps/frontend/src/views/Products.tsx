import { Screen } from '@src/components/Screen';
import { ScreenTitle } from '@src/components/ScreenTitle';
import { ShoppingCart } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { SearchBar } from '@src/components/SearchBar';

export const ProductsView = () => {
  return (
    <Screen>
      <ScreenTitle
        text="Lista de precios"
        Icon={ShoppingCart}
        caption="Busca por diferentes criterios, cambia de pagina o vé directamente a una pagina determinada "
      />
      <SearchBar onSearch={console.log} />
      <DataGrid
        columns={[
          {
            field: 'code',
            headerName: 'Codigo',
            flex: 1,
          },
          {
            field: 'description',
            headerName: 'descripcion',
            flex: 1,
          },
          {
            field: 'price',
            headerName: 'Precio',
            flex: 1,
          },
        ]}
        rows={[
          {
            id: 1,
            code: '01.01.01.01',
            description: 'Abrazadera',
            price: 19.9,
          },
          {
            id: 2,
            code: '01.01.01.01',
            description: 'Abrazadera',
            price: 19.9,
          },
          {
            id: 3,
            code: '01.01.01.01',
            description: 'Abrazadera',
            price: 19.9,
          },
          {
            id: 4,
            code: '01.01.01.01',
            description: 'Abrazadera',
            price: 19.9,
          },
        ]}
      />
    </Screen>
  );
};
