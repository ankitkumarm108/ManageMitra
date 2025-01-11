import { StyleSheet } from "react-native";
import Colors from "../Utils/Colors";
import Responsive from "../Helper/Responsive";

export const CommonStyles=StyleSheet.create({
    Container:{
        flex:1
    },
    w100:{
        width:"100%"
    },
    rowView:{
        flexDirection:"row"
    },
    bgWhite:{
        backgroundColor: Colors.white
    },
    w25:{
        width:"25%",
        alignItems:"center",
        justifyContent:"center"
        

    },
    spaceBetween:{
        justifyContent:"space-evenly"
    },
    pT13:{
        paddingTop:13
    },
    pT8:{
        paddingTop:8
    },
    pB10:{
        paddingBlock: 10
    },
    pB8:{
        paddingBlock: Responsive.scale(8)
    },
    pH16:{
        paddingHorizontal: 16
    }
})