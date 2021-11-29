# React NPM module

This is a test module to deployment

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'sy-product-card';
```

```
      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 6,
          // maxCount: 10,
        }}
      >
        {({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
