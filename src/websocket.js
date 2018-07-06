import {callGetIntentions, removeIntention} from "./actions/intentions";
import Sockette from "sockette";
import { callGetExchangeInfo } from "./actions/exchanges";


export default dispatch => {
    const ws = new Sockette('ws://localhost:5001', {
        timeout: 5e3,
        maxAttempts: 10,
        onopen: () => ws.json({
            userId: 1,
            facultyIds: [1] // TODO: get ids from token
        }),
        onmessage: ({data}) => handleMessage(JSON.parse(data)),
        onerror: e => console.log('Error:', e),
        protocols: 'echo-protocol'
    });

    const handleMessage = ({channel, record}) => {
        switch (channel) {
            case 'intentioncreated':
                dispatch(callGetIntentions(record.facultyId, record.id));
                break;
            case 'intentionremoved':
                dispatch(removeIntention(record.id));
                break;
            case 'exchangecreated':
                dispatch(callGetExchangeInfo(record));
                break;
            default:

        }
    };

    setTimeout(ws.reconnect, 10e3);

    return ws
};