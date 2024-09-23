import {View, StyleSheet} from 'react-native';
import React, {FC, useEffect} from 'react';
import CustomSafeAreaView from '../../components/global/CustomSafeAreaView';
import LottieView from 'lottie-react-native';
import Anim from '../../assets/animations/loader.json';
import {resetAndNavigate} from '../../utils/NavigationUtils';

const SplashScreen: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      resetAndNavigate('LoginScreen');
    }, 3000);
  }, []);

  return (
    <CustomSafeAreaView>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop
          speed={0.9}
          source={Anim}
          style={{width: 250, height: 250}}
        />
      </View>
    </CustomSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
