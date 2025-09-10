import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

export default function RegisterInformation() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="m-4 rounded bg-white p-4 shadow">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View className="flex-1 bg-white p-4">
          <Text className="mb-6 text-xl font-bold">Thông tin đăng ký</Text>
          <TextInput
            placeholder="Họ và tên"
            className="mb-4 rounded-md border border-gray-300 px-4 py-3"
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            className="mb-4 rounded-md border border-gray-300 px-4 py-3"
          />
          <TextInput
            placeholder="Số điện thoại"
            keyboardType="phone-pad"
            className="mb-4 rounded-md border border-gray-300 px-4 py-3"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
