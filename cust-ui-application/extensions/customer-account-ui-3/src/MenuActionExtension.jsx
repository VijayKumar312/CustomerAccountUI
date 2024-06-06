import {
  reactExtension,
  BlockStack,
  Button,
  Image,
  Text,
  InlineStack,
  useSettings,
} from '@shopify/ui-extensions-react/customer-account';
reactExtension('customer-account.order-status.block.render', () => <App />);

function App() {
  const { title, description, image_url, btn_text, btn_type } = useSettings();
  return (
    <InlineStack blockAlignment="center">
      <Image source={image_url} />
      <BlockStack spacing="tight">
        <Text size="large">{title}</Text>
        <Text size="small">{description}</Text>
      </BlockStack>
      <Button appearance={btn_type}>{btn_text}</Button>
    </InlineStack>
  );
}
