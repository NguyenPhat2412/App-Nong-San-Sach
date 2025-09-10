import { View, Text, Image, TouchableOpacity } from 'react-native';

interface ProductProps {
  name: string;
  price: string;
  image: any;
}

export default function ProductCard({ name, price, image }: ProductProps) {
  return (
    <View className="m-2 w-[45%] rounded-lg bg-white p-3 shadow">
      <Image source={image} className="mb-2 h-28 w-full rounded-lg" />
      <Text className="text-lg font-semibold">{name}</Text>
      <Text className="text-green-600">{price}</Text>
      <TouchableOpacity className="mt-2 rounded bg-green-600 p-2">
        <Text className="text-center text-white">Thêm giỏ hàng</Text>
      </TouchableOpacity>
    </View>
  );
}
