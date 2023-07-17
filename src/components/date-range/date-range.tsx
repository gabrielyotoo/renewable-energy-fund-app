import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { hexToRGB } from '@app/utils/colors';
import Text from '@components/text';

import styles from './date-range.style';

export type DateRangeOptions = 'h' | 'd' | 'w' | 'm' | 'y' | 'all';

type DateRangeProps = {
  range: DateRangeOptions;
  onChangeRange: (range: DateRangeOptions) => void;
  style?: ViewStyle;
};

const DateRange = ({ onChangeRange, range, style }: DateRangeProps) => {
  const { colors } = useTheme();
  const buttonBackgroundColor = hexToRGB(colors.primary, 0.1);

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onChangeRange('h')}>
        <View
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        >
          <Text type={range === 'h' ? 'accent' : 'ghost'}>1h</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onChangeRange('d')}>
        <View
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        >
          <Text type={range === 'd' ? 'accent' : 'ghost'}>1d</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onChangeRange('w')}>
        <View
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        >
          <Text type={range === 'w' ? 'accent' : 'ghost'}>1w</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onChangeRange('m')}>
        <View
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        >
          <Text type={range === 'm' ? 'accent' : 'ghost'}>1m</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onChangeRange('y')}>
        <View
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        >
          <Text type={range === 'y' ? 'accent' : 'ghost'}>1y</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => onChangeRange('all')}
      >
        <View
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
        >
          <Text type={range === 'all' ? 'accent' : 'ghost'}>All</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DateRange;
