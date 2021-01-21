import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native'

import Icons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'
import { ToggleIcon } from './'
import { checkSource } from './utils'

const backgroundColor = 'transparent'

const styles = StyleSheet.create({
  container: {
    height: 35,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    // alignSelf: 'center',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    backgroundColor,
    paddingLeft: 10,
    paddingRight: 35,
    fontSize: 16
  },
  logo: {
    marginLeft: 5,
    height: 25,
    width: 25
  }
})

const TopBar = (props) => {
  const {
    logo,
    more,
    title,
    theme,
    onMorePress,
    onBack,
    isFullscreen,
    toggleFS
  } = props
  return (
    <LinearGradient colors={['rgba(0,0,0,0.75)', 'rgba(0,0,0,0)']} style={styles.container}>
      <View style={styles.row}>
        { logo && <Image style={styles.logo} resizeMode="contain" {...checkSource(logo)} />}
        { (onBack != null && onBack != undefined) && <Icons onPress={isFullscreen ? toggleFS : onBack} name={"arrow-back"} color="#fff" size={26} style={{marginLeft: 10, paddingVertical: 10}}/>}
        { isFullscreen && <Text
          style={[styles.title, { color: theme.title, paddingVertical: 10  }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>}
        { more &&
          <ToggleIcon
            style={styles.more}
            onPress={() => onMorePress()}
            paddingRight
            iconOff="more-horiz"
            iconOn="more-horiz"
            theme={theme.more}
            size={25}
          />
        }
      </View>
    </LinearGradient>
  )
}

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  more: PropTypes.bool.isRequired,
  onMorePress: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  onBack : PropTypes.func,
  isFullscreen: PropTypes.bool,
  toggleFS: PropTypes.func.isRequired,
}

export { TopBar }