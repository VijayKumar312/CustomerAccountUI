import {
  Banner,
  Page,
  reactExtension,
  useApi,
  TextBlock,
  BlockLayout,
  BlockStack,
  Card,
  Grid,
  Heading,
  Text,
  InlineLayout,
  Icon,
  View,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.page.render', () => <FullPageExtension />);

function FullPageExtension() {
  const { extension, i18n } = useApi();

  return (
    <Card padding>
      <Grid columns={['fill', 'auto']} spacing="base" minInlineSize="fill" blockAlignment="start">
        <BlockStack spacing="loose">
          <Heading>Addresses</Heading>
          <BlockStack spacing="base">
            <Text appearance="subdued">Default address</Text>
            <BlockStack spacing="extraTight">
              <TextBlock>Kristin Watson</TextBlock>
              <TextBlock>1655 Island Pkwy</TextBlock>
              <TextBlock>Kamloops BC M7G 672</TextBlock>
              <TextBlock>Canada</TextBlock>
            </BlockStack>
          </BlockStack>
        </BlockStack>
        <BlockStack spacing="loose">
          <InlineLayout blockAlignment="center">
            <Icon source="plus" size="small" appearance="accent" />
            <Text appearance="accent">Add</Text>
          </InlineLayout>
          <View inlineAlignment="end">
            <Icon source="pen" size="small" appearance="accent" />
          </View>
        </BlockStack>
      </Grid>
    </Card>
  );
}
