import { Button, Image, Text, TouchableOpacity, View } from 'react-native';

export default function Banner() {
  return (
    <View className="relative">
      <Image source={require('../assets/Banner.png')} className="h-40 w-full" />
      <View className="absolute inset-0 z-10 w-60 justify-center">
        <Text className="absolute top-1 z-10 ml-4 w-full text-2xl font-bold text-white">
          Chào mừng đến với Nông Sản Sạch!
        </Text>
        <Text className="ml-4 mt-12 w-full text-sm text-white">Giảm giá lên đến 48%</Text>
        <TouchableOpacity
          className="ml-4 mt-2 w-40 rounded-lg bg-green-600 px-5 py-3 text-center active:bg-green-700"
          onPress={() => alert('Mua ngay sẽ được giảm giá 48%')}>
          <Text className="text-center text-sm font-bold text-white">Mua ngay </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
