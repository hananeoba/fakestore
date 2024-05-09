import { StyleSheet } from "react-native";

export default StyleSheet.create({
    input: {
        //height: 50,
        width: 311,
       paddingTop:10,
        marginBottom:20,
        borderBottomWidth: 0.8,
        borderBottomColor: 'dim-gray',
    },
    button: {
        backgroundColor: "#ffbf69",
        padding: 10,
        marginTop:30,
        height: 50,
        width: 311,
        borderRadius:10,
        alignItems: "flex-start",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize:36,
        fontWeight: "bold",
        marginBottom:20,
    },
    subtitle: {
        fontSize: 30,
        color: "#38434D",
        marginBottom: 30,
    },
    container: {
        backgroundColor: "#fff",
        flex: 2,
        alignItems:"flex-start" ,
        marginTop:0,
        padding: 24,
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    text: {
        fontSize: 16,
        height:17,
        color: "#38434D",
    },
    image: {
        width: 200,
        height: 200,
    },
    product: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    productTitle: {
        fontSize: 24,
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 18,
        color: "green",
    },
    productDescription: {
        fontSize: 16,
    },
    productImage: {
        width: 200,
        height: 200,
    },
    productButton: {
        backgroundColor: "blue",
        padding: 10,
        margin: 15,
        height: 40,
    },
    productButtonText: {
        color: "white",
    },
});