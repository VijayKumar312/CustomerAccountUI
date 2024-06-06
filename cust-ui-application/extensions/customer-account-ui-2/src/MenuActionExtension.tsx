import {
  reactExtension,
  Text,
  ImageGroup,
  View,
  Image,
  BlockStack,
  useSettings,
} from '@shopify/ui-extensions-react/customer-account';

export default reactExtension('customer-account.order-status.block.render', () => <Extension />);

function Extension() {
  const { image_1, image_2, image_3, image_4 } = useSettings();
  console.log('page called');

  return (
    <BlockStack>
      <Text>Image Grid Here</Text>
      <View minInlineSize={300}>
        <ImageGroup variant="grid">
          <Image source={image_1} />
          <Image source={image_2} />
          <Image source={image_3} />
        </ImageGroup>
      </View>
    </BlockStack>
  );
}
