import { View, Text, SafeAreaView, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import TitleHome from '@/Components/TitleHome'
import SavingDetails from '@/Components/SavingDetails'
import ServicesSection from '@/Components/ServicesSection'

const { width } = Dimensions.get('window')

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = useRef(null);

    const handleScroll = (e) => {
        const x = e.nativeEvent.contentOffset.x;
        const index = Math.round(x / width);
        setCurrentIndex(index);
    };

    const handleCirclePress = (index) => {
        setCurrentIndex(index);
        scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TitleHome title='Hi, Temitope' para='How are you today?' />
                <ScrollView
                    ref={scrollViewRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={handleScroll}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.scrollView}
                >
                    <View style={styles.scrollDiv}>
                        <SavingDetails />
                    </View>
                    <View style={styles.scrollDiv}>
                        <SavingDetails />
                    </View>
                    <View style={styles.scrollDiv}>
                        <SavingDetails />
                    </View>
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {[0, 1, 2].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCirclePress(index)}>
                            <View
                                style={[
                                    styles.circle,
                                    { backgroundColor: currentIndex === index ? '#208220' : '#B7B7B7' },
                                ]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            <View>
                <ServicesSection/>
            </View>
        </SafeAreaView>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {},
    scrollView: {
        paddingHorizontal: 10,
    },
    scrollDiv: {
        width: width - 20, // Adjust this to match the screen width
        height: 200,
        marginTop: 1,
        backgroundColor: '#208220',
        alignSelf: 'center',
        borderRadius: 8,
        marginRight: 10,
    },
    indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});
