import { Image, Text, View } from 'react-native';

export default function ClientTestimonials() {
  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      feedback: 'Sản phẩm rất tươi ngon và dịch vụ tuyệt vời!',
      image: require('../assets/Avatar/Avatar-1.png'),
    },
    {
      name: 'Trần Thị B',
      feedback: 'Giao hàng nhanh, đóng gói cẩn thận. Rất hài lòng!',
      image: require('../assets/Avatar/Avatar-2.png'),
    },
    {
      name: 'Lê Văn C',
      feedback: 'Giá cả hợp lý, chất lượng sản phẩm vượt mong đợi.',
      image: require('../assets/Avatar/Avatar-3.png'),
    },
  ];
  return (
    <View>
      <Text>Khách hàng nói gì về chúng tôi?</Text>
      {testimonials.map((t, index) => (
        <View key={index} className="m-2 rounded-lg bg-white p-4 shadow">
          <Image source={t.image} className="mb-2 h-16 w-16 rounded-full" />
          <Text className="font-bold">{t.name}</Text>
          <Text className="mt-1 text-gray-600">{t.feedback}</Text>
        </View>
      ))}
    </View>
  );
}
