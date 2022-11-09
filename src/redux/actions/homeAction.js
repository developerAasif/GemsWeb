
import axios from 'axios'
import _ from 'lodash';



export const home = (data) => async (dispatch) => {

    // try {
    //     let payload = {
    //         'Keyword': data?.email,
    //         'Password': data?.password,
    //         'DeviceType': 'Native',
    //         'Source': 'Direct',
    //     }
    //     const res = await helper.api(apiPath.login, 'post', payload)
    //     console.log('res', res?.ResponseCode === '200');

    //     if (res?.ResponseCode === '200') {
    //         dispatch({
    //             type: LOGIN_SUCCESS,
    //             payload: res
    //         })
    //         dispatch({
    //             type: LOADER,
    //             payload: false
    //         })
    //         return true
    //     } else {
    //         dispatch({
    //             type: LOADER,
    //             payload: false
    //         })
    //         toast.error(res?.Message);
    //         return false
    //     }

    // } catch (error) {
    //     console.log('error in login api::', error)
    // }

}
