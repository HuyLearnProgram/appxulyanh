import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home ({navigation}) {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
          <LinearGradient
            colors={['#2E8B57', '#3CB371']}
            style={styles.gradient}
          >
            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.title}>Chào mừng đến với App!</Text>
                <Text style={styles.subtitle}>
                  An toàn của bạn luôn là{'\n'}
                  ưu tiên hàng đầu của chúng tôi!
                </Text>
              </View>
              
              <TouchableOpacity
                style={[styles.button, isPressed && styles.buttonPressed]}
                activeOpacity={0.9}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}
                onPress={() => navigation.navigate('Details')}
              >
                <Text style={styles.buttonText}>BẮT ĐẦU</Text>
              </TouchableOpacity>
  
              <View style={styles.footer}>
                <Text style={styles.footerText}>Đã có tài khoản?</Text>
                <TouchableOpacity>
                  <Text style={styles.linkText}>Đăng nhập</Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradient: {
      flex: 1,
    },
    content: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: 48,
    },
    title: {
      fontSize: 32,
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
      marginBottom: 16,
      letterSpacing: 0.5,
    },
    subtitle: {
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 28,
      fontWeight: '500',
      color: '#B2DFDB', // Xanh nhạt cho subtitle
    },
    button: {
      backgroundColor: '#66BB6A',
      paddingVertical: 16,
      paddingHorizontal: 64,
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
      elevation: 8,
      transform: [{ scale: 1 }],
    },
    buttonPressed: {
      backgroundColor: '#4CAF50', // Đổi màu khi nhấn
      shadowOffset: { width: 0, height: 2 }, // Giảm bóng đổ khi nhấn
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4,
    },
    buttonText: {
      color: '#FFFFFF', // Trắng cho chữ trên nút
      fontSize: 16,
      fontWeight: '700',
      letterSpacing: 1,
      textAlign: 'center',
    },
    footer: {
      position: 'absolute',
      bottom: 40,
      flexDirection: 'row',
      gap: 8,
    },
    footerText: {
      color: '#FFFFFF',
      fontSize: 15,
    },
    linkText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: '600',
      textDecorationLine: 'underline',
    },
});