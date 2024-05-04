
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import COLORS from '../../consts/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const categories = ["All", "Popular", "Top Rated", "Featured", "Luxury"];

    const CategoryList = () => {
        return(
            <View style={styles.categoryListContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8}>
                        <View>
                            <Text>{item}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        )
    }; 

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <View style={{ padding: 15 }}>
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                        Find your hotel
                    </Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:30, fontWeight:"bold"}}>in</Text>
                        <Text style={{fontSize:30, fontWeight:"bold",color:COLORS.primary}}> Paris</Text>
                    </View>
                </View>
                <MaterialIcons style={{marginTop:18}} name="person-outline" size={38} color={COLORS.grey} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.searchInputContainer}>
                    <Octicons name="search" size={30} color="black" style={{marginLeft:20}} />
                    <TextInput placeholder="Search" style={{fontSize:20, paddingLeft:10}} />
                </View>
                <CategoryList />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height:50,
        backgroundColor: COLORS.light,
        marginTop:15,
        marginLeft:20,
        marginTopLeftRadius: 30,
        marginBottomLeftRadius:30,
        flexDirection:"row",
        alignItems:"center"
    },
    categoryListContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        marginTop:30,
    }
});

export default HomeScreen;
