 
import { StyleSheet} from 'react-native';
 
export const CustomStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'skyblue',
    },
    container2:{
        flex:1,
        borderBottomColor:'gray',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems :'center',
        justifyContent:'space-between',
    },

    appTitle: {
      color: '#fff',
      marginBottom: 30,
      backgroundColor: 'skyblue',
      fontSize:30,
      fontWeight:'bold' ,
      textAlign:'center',
      marginTop:10,
      fontFamily:'Open Sans'
    },
    card: {
        backgroundColor:'#fff',
        flex:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        marginLeft:10,
        marginRight:10
    },
    input:{
        padding:20,
        borderBottomColor: '#bbb',
        borderBottomWidth:1,
        fontSize:24,
        marginLeft:20
    },
    inputContainer: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems : 'center',
    },
    button:{
        marginRight:10
    },
    listContainer:{
        alignItems:'center'
    },
    continer: {
        flex:1,
        borderBottomColor:'#bbb',
        borderBottomWidth:StyleSheet.hairlineWidth,
        flexDirection :'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    circle:{
        width:25,
        height:25,
        borderRadius:15,
        borderColor:'red',
        borderWidth:2,
        marginRight:20,
        marginStart:20
    },
    text:{
        flex:5,
        fontWeight:'500',
        fontSize:18,
        marginVertical:20,
        width:100,

    },
    completeCircle:{
        marginRight:20,
        marginLeft:20,
    },
    strikeText:{
        color:'#bbb',
        textDecorationLine:'line-through',
    },
    unstrikeText:{
        color:'#29323c'
    },
    buttonContainer:{
        marginVertical:10,
        marginHorizontal:10,
    },
    imageAdjustment:{
        marginStart:20,
        height:20,
        width:20,
        padding:10
    },
   
     
  });
  