import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';

interface HeaderProps {
  search: string;
  setSearch: (text: string) => void;
}

export default function Header({ search, setSearch }: HeaderProps) {
  const [openMenu, setOpenMenu] = useState(false);
  const navigation = useNavigation();

  return (
    <View className="bg-green-700 p-4">
      {/* Logo + Menu + Tên app */}
      <View className="mb-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image source={require('../assets/logo.png')} className="mr-3 h-10 w-10" />
          <Text className="text-xl font-bold text-white">Nông Sản Sạch</Text>
        </View>

        {/* Nút menu */}
        <TouchableOpacity onPress={() => setOpenMenu(!openMenu)}>
          <Text className="text-2xl text-white">☰</Text>
        </TouchableOpacity>
      </View>

      {/* Ô tìm kiếm */}
      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Tìm kiếm sản phẩm..."
        placeholderTextColor="#ccc"
        className="rounded bg-white px-3 py-2"
      />

      {/* Menu dropdown */}
      {openMenu && (
        <View className="mt-3 rounded bg-white p-3">
          <Pressable
            onPress={() => {
              setOpenMenu(false);
              navigation.navigate('Home' as never);
            }}>
            <Text className="py-1 text-green-700">🏠 Trang Chủ</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setOpenMenu(false);
              navigation.navigate('Cart' as never);
            }}>
            <Text className="py-1 text-green-700">🛒 Giỏ Hàng</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setOpenMenu(false);
              navigation.navigate('Favorites' as never);
            }}>
            <Text className="py-1 text-green-700">❤️ Yêu Thích</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setOpenMenu(false);
              navigation.navigate('Contact' as never);
            }}>
            <Text className="py-1 text-green-700">📞 Liên Hệ</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
