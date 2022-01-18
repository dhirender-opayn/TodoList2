
import { StyleSheet } from 'react-native';

export const CustomStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    container2: {
        flex: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    appTitle: {
        color: '#fff',
        marginBottom: 30,
        backgroundColor: 'skyblue',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Open Sans'
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginLeft: 10,
        marginRight: 10
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        width: 250,
        fontSize: 16,
        marginLeft: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cancelButtonContainer: {
        height:20,
        width:20,
    },


    appButtonContainer: {
        elevation: 8,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    appButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        textTransform: 'uppercase'
    },


 
    listContainer: {
   
        alignItems: 'center'
    },
    continer: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 15,
        borderColor: 'red',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 14,
        marginVertical: 20,
        width: 100,

    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c'
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    imageAdjustment: {
        height: 15,
        width: 15,
    },
    categoryitems:{
      
        backgroundColor:'#bfbfbf',
        borderColor:'#8c8c8c',
        paddingHorizontal:5,
        paddingVertical:5,
        marginEnd:2,
        borderRadius:10,
        marginTop:10,
        marginStart:10,
        color:'white',
        fontSize:14,
        alignSelf:'center'
    },
    selectedcategoryitems:{
      
        backgroundColor:'red',
      
        paddingHorizontal:5,
        paddingVertical:5,
        marginEnd:2,
        borderRadius:10,
        marginTop:10,
        marginStart:10,
        color:'white',
        fontSize:14,
        alignSelf:'center'
    }


});
