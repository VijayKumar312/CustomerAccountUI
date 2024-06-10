import {
  BlockStack,
  Text,
  reactExtension,
  useAttributeValues,
  useCartLines,
  useAppMetafields,
  Card,
  Heading,
  BlockSpacer,
  useOrder,
  Grid,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.order-status.block.render', () => <Extension />);

function Extension() {
  const [testOrderattribute] = useAttributeValues(['testOrderattribute']);
  console.log(testOrderattribute, 'attributes');
  const abc = useOrder();
  // console.log(abc, ' order data');

  // It will display all avaliable metafields with value
  // fetch product level metafields
  const productmeta = useAppMetafields({
    type: 'product',
    namespace: 'custom',
    key: 'customer_ui_meta',
  });
  // fetch variant level metafields
  const variantID = useAppMetafields({
    type: 'variant',
    namespace: 'custom',
    key: 'variant_name',
  });

  // console.log(variantID, 'variant metafields');
  // console.log(productmeta, 'product metafields');
  // fetch cart Lines
  const cartlines = useCartLines();
  const product_id = cartlines[0].merchandise.product.id;
  // console.log(product_id);
  // console.log(cartlines, 'cart lines data');

  // const fetchDropdownData = async () => {
  //   query(
  //     `query abc($productid: ID!){
  //       product(id: $productid) {
  //         createdAt
  //         handle
  //         id
  //         title
  //       }
  //     }`,
  //     {
  //       variables: { productid: 'gid://shopify/Product/9318512558371' },
  //     },
  //   )
  //     .then(({ data, errors }) => {
  //       console.log(data, 'query called');
  //     })
  //     .catch((errors) => {
  //       console.error(errors);
  //     })
  //     .finally(() => {});
  // };
  // fetchDropdownData();
  // console.log(cartlines, 'welcome');
  // console.log(cartlines[0].attributes[1].value, 'welcome');

  return (
    <>
      <Card padding>
        <Heading>Product Level Metafields</Heading>
        <Grid columns={['fill', 'fill']} rows="auto">
          <BlockStack>Key</BlockStack>
          <BlockStack>Value</BlockStack>
          {productmeta.length > 0 &&
            productmeta.map((appmeta) => {
              return (
                <>
                  <BlockStack>
                    <Text>{appmeta.metafield.key}</Text>
                  </BlockStack>
                  <BlockStack>
                    <Text>{appmeta.metafield.value}</Text>
                  </BlockStack>
                </>
              );
            })}
        </Grid>
        <BlockSpacer></BlockSpacer>
        <Heading>Variant Level Metafields</Heading>
        <Grid columns={['fill', 'fill']} rows="auto">
          <BlockStack>Key</BlockStack>
          <BlockStack>Value</BlockStack>
          {variantID.length > 0 &&
            variantID.map((appmeta) => {
              return (
                <>
                  <BlockStack>
                    <Text>{appmeta.metafield.key}</Text>
                  </BlockStack>
                  <BlockStack>
                    <Text>{appmeta.metafield.value}</Text>
                  </BlockStack>
                </>
              );
            })}
        </Grid>
        <BlockSpacer></BlockSpacer>
        <Heading>Properties of Products</Heading>
        <Grid columns={['fill', 'fill']} rows="auto">
          <BlockStack>Key</BlockStack>
          <BlockStack>Value</BlockStack>
          {cartlines.length > 0 &&
            cartlines.map((cartlinedata) => {
              return (
                cartlinedata.attributes.length > 0 &&
                cartlinedata.attributes.map((attributesdata) => (
                  <>
                    <BlockStack>
                      <Text>{attributesdata.key}</Text>
                    </BlockStack>
                    <BlockStack>
                      <Text>{attributesdata.value}</Text>
                    </BlockStack>
                  </>
                ))
              );
            })}
        </Grid>
      </Card>
    </>
  );
}
