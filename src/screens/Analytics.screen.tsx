import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppContext } from '../App.provider';
import groupBy from 'lodash/groupBy';
import { VictoryPie } from 'victory-native';
import { theme } from '../theme';

export const Analytics: React.FC = () => {
  const appContext = useAppContext();
  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    }),
  );
  return (
    <View style={styles.container}>
      <VictoryPie
        data={data}
        labelRadius={100}
        radius={180}
        innerRadius={30}
        colorScale={[
          theme.colorWhite,
          theme.colorPurple,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorLavender,
        ]}
        style={{
          labels: { fontSize: 30 },
          data: { stroke: 'black', strokeWidth: 0.5, fillOpacity: 0.8 },
        }}
        padAngle={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
