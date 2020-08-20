import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  centeredView1: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    paddingTop: 35,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {alignItems: 'center', marginBottom: 10},
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonStyle: {
    backgroundColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
  },
  forgot: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  forgotText: {
    color: 'grey',
    fontSize: 14,
  },
});
