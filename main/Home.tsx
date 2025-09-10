import Header from '../components/Header';
import '../global.css';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import React from 'react';
import Banner from '../components/Banner';
import Support from '../components/Support';
import ClientTestimonials from '../components/ClientTestimonials';
import RegisterInformation from '../components/RegisterInformation';

const products = [
  {
    name: 'Rau sạch hữu cơ',
    price: '30.000đ / kg',
    image: require('../assets/rau.jpg'),
  },
  {
    name: 'Cà chua chín đỏ',
    price: '40.000đ / kg',
    image: require('../assets/cachua.jpg'),
  },
  {
    name: 'Khoai tây tươi',
    price: '25.000đ / kg',
    image: require('../assets/khoaitay.jpg'),
  },
  {
    name: 'Táo hữu cơ',
    price: '80.000đ / kg',
    image: require('../assets/tao.jpg'),
  },
];
export default function Home() {
  const [search, setSearch] = React.useState('');

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <View className="flex-1 bg-gray-100">
        <Header search={search} setSearch={setSearch} />

        {/* Product list */}
        <ScrollView className="flex-1 p-3">
          <Banner />
          <Support />
          <View className="mb-3 border-b border-gray-300 pb-2">
            <Text className="text-lg font-bold">Danh sách sản phẩm: </Text>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))
            ) : (
              <View className="flex-1 items-center justify-center">
                <Text className="text-lg text-gray-600">Không tìm thấy sản phẩm</Text>
              </View>
            )}
          </View>
          <ClientTestimonials />
          <RegisterInformation />
        </ScrollView>

        {/* Footer */}
        <Footer />
      </View>

      <StatusBar />
    </>
  );
}
