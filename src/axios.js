import axios from "axios";
import {refresh} from "./actions/authorization";
import {alertError} from "./actions/alert";
import join from 'url-join';

export default dispatch => {
    axios.interceptors.request.use(config =>{
        config.url = join('http://localhost:5000', config.url);

        if(!config.headers['Authorization']) {
            Object.assign(config.headers, {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            });
        }

        return config
    });

    axios.interceptors.response.use(
        ok => ok,
        err => {
            if(err.response.status === 401) {
                if(!err.request.responseURL.includes('/api/oauth/token/refresh')){
                    return axios.get('/api/oauth/token/refresh', {
                        headers: {'Authorization': `Bearer ${localStorage.getItem('refreshToken') }`}
                    })
                        .then(({data}) => {
                            dispatch(refresh(data));
                            err.config.headers['Authorization']=`Bearer ${data.token}`;
                            return axios(err.config)
                        });
                }

            } else {
                dispatch(alertError(err.response.data.message))
            }

            return err
        }
    );
};