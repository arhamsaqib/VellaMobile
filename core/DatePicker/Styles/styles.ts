import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    height: 90,
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginHorizontal: 6,
  },
  valueContainer: {
    height: 50,
    justifyContent: 'center',
    marginTop: 6,
  },
  textName: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textValue: {
    marginHorizontal: 6,
    fontSize: 15,
  },
  modalView1: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
  },

  modalView2: {
    backgroundColor: 'white',
    //width: '100%',
    height: 300,
    margin: 10,
  },
  listView: {
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
