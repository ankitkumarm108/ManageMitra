import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, Pressable } from 'react-native';

const data = [
  {
    id: 1,
    name: "Facebook",
    backgroundColor: "blue",
  },
  {
    id: 2,
    name: "Instagram",
    backgroundColor: "pink",
  },
  {
    id: 3,
    name: "SnapChat",
    backgroundColor: "yellow",
  },
  {
    id: 4,
    name: "Thread",
    backgroundColor: "black",
  },
];

const { width } = Dimensions.get('screen');

const SocialChanelSlider = () => {
  const flatListRef:any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    let scrollInterval:any;

    if (isScrolling && Array.isArray(data) && data.length > 0) {
      scrollInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
          return nextIndex;
        });
      }, 3000);
    }

    return () => clearInterval(scrollInterval);
  }, [isScrolling]);

  const handleScroll = (event:any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = () => {
    setIsScrolling(false);
  };

  const handleTouchEnd = () => {
    setIsScrolling(true);
  };

  const handleIndicatorPress = (index:any) => {
    setIsScrolling(false);
    setCurrentIndex(index);
    flatListRef.current?.scrollToIndex({ index, animated: true });
    setTimeout(() => setIsScrolling(true), 3000);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPressIn={handleTouchStart}
            onPressOut={handleTouchEnd}
            style={[
              styles.itemContainer,
              { backgroundColor: item?.backgroundColor },
            ]}
          >
            <Text style={styles.itemText}>{item?.name}</Text>
          </Pressable>
        )}
      />
      {data?.length > 1 && (
        <View style={styles.indicatorContainer}>
          {data.map((_, index) => (
            <Pressable key={index} onPress={() => handleIndicatorPress(index)}>
              <View
                style={[
                  styles.indicator,
                  {
                    backgroundColor: currentIndex === index ? "white" : "transparent",
                  },
                ]}
              />
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: width - 32,
    marginHorizontal: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 10,
    height: 150,
  },
  itemText: {
    color: 'white',
    fontSize: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default SocialChanelSlider;
