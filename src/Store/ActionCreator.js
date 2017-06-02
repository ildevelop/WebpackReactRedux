/**
 * Created by Radu on 5/31/2017.
 */
import {ADD_NEW_MESSAGE, ADD_NEW_USER} from './constant'
export const addNewUser =(userName)=> ({type: ADD_NEW_USER, payload: userName.toLowerCase()});
export const addMessage =(message ,text, time)=> ({type: ADD_NEW_MESSAGE, payload: message ,text, time});