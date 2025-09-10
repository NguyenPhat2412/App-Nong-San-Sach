import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Support() {
  const translateX = useRef(new Animated.Value(0)).current;
  const screenWidth = Dimensions.get('window').width;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: -screenWidth,
          duration: 12000,
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.row, { transform: [{ translateX }] }]}>
        <View style={styles.box}>
          <Text>🚙 Miễn phí vận chuyển cho đơn hàng từ 500.000đ</Text>
          <Text>Phí vận chuyển từ giá tốt bởi các đơn vị khác</Text>
        </View>
        <View style={styles.box}>
          <Text>📞 Hỗ trợ khách hàng 24/7</Text>
          <Text>Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn</Text>
        </View>
        <View style={styles.box}>
          <Text>📧 Đổi trả hàng dễ dàng</Text>
          <Text>Chính sách đổi trả linh hoạt trong 7 ngày</Text>
        </View>
        <View style={styles.box}>
          <Text>🔒 Thanh toán an toàn</Text>
          <Text>Chúng tôi cam kết bảo mật thông tin khách hàng</Text>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: Dimensions.get('window').width / 2,
    marginRight: 20,
  },
});
