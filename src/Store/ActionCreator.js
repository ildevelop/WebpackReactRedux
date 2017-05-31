/**
 * Created by Radu on 5/31/2017.
 */
import {ADD_NEW_USER} from './constant'
export const addNewUser =(userName)=> ({type: ADD_NEW_USER, payload: userName});
// export const addEmail =(email)=> ({type: SET_EMAIL, payload: email});