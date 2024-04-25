import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import colors from '../Utility/colors';
import { defineAnimation } from 'react-native-reanimated';

const DetailListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={24}
              style={styles.icon}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailListItem;

DetailListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft:24,
  },
  wrapper: {
    flexDirection: 'row',
    paddingTop:16,
    paddingBottom:16,
    paddingRight:24,
    borderBottomColor:colors.greyDark,
    borderBottomWidth:StyleSheet.hairlineWidth,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight:'bold',
  },
  subtitle: {
    fontSize: 14,
    color: colors.blue,
    marginTop:4,
  },
});
