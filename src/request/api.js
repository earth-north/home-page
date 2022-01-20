/**
 * api接口统一管理
 */
import {get, post} from './http'

export const apiAddress = p => get('/api/home/findAll', p);
export const apiAddress1 = p => post('home/findAll', p);