import React, { useEffect, useState } from 'react';
import {
  Button,
  reactExtension,
  useMetafield,
  useOrder,
  useApi,
  useMetafields,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.order-status.block.render', () => (
  <UpdateOrderExtension />
));

function UpdateOrderExtension() {
  const { query } = useApi();
  const order = useOrder();
  const orderId = order.id.replace('gid://shopify/Order/', ''); // Extract order ID

  const [metafield, setMetafield] = useState(null);
  const [error, setError] = useState(null);

  const metafields = useMetafields();
  // console.log(metafields, 'List is here');

  useEffect(() => {
    const fetchMetafield = async () => {
      console.log('Entered');
      try {
        const response = await query(
          `query{
            order(id: "gid://shopify/Order/5863943995683") {
              id
              metafields(namespace: "custom", first: 5) {
                nodes {
                  key
                  namespace
                  value
                }
              }
            }
            }`,
        );
        console.log(response);
        const data = response?.data?.order?.metafield;
        // console.log(data, 'my data');
        setMetafield(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMetafield();
  }, [orderId, query]);

  return <Button>{orderId}</Button>;
}
