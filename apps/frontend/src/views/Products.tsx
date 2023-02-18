import { Screen } from '@src/components/Screen';
import { ScreenTitle } from '@src/components/ScreenTitle';
import { ShoppingCart } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { SearchBar } from '@src/components/SearchBar';
import { useProducts } from '@src/providers/ProductsProvider';

export const ProductsView = () => {
  const { products } = useProducts();
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
            headerName: 'Descripcion',
            flex: 1,
          },
          {
            field: 'price',
            headerName: 'Precio',
            flex: 1,
          },
        ]}
        rows={products}
      />
    </Screen>
  );
};
