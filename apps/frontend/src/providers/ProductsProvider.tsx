import { DbCollection, DbCollectionEnum } from '@src/api/DbCollection';
import { firestore } from '@src/config/firebase';
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export interface ProductsState {
  products: any[];
}

const ProductsContext = createContext<ProductsState>(
  {} as any as ProductsState
);

export const useProducts = () => {
  return useContext(ProductsContext);
};
export const ProductsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  // State
  const [products, setProducts] = useState<any[]>([]);
  const [productsApi] = useState<DbCollection>(
    new DbCollection(DbCollectionEnum.Products, firestore)
  );
  // Methods
  const loadProducts = useCallback(async () => {
    const list = await productsApi.list();
    setProducts(list);
  }, []);
  // Effects
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
