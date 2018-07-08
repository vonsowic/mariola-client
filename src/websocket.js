import {callGetIntentions, removeIntention} from "./actions/intentions";
import Sockette from "sockette";
import { callGetExchangeInfo } from "./actions/exchanges";


export default store => {
    const { user } = store.getState();
    const facultiesIds = Object.keys(user.faculties);

    const ws = new Sockette(process.env.REACT_APP_NOTIFICATION_URL || 'ws://localhost:5001', {
        timeout: 5e3,
        maxAttempts: 10,
        onopen: () => ws.json({
            userId: user.id,
            facultyIds: facultiesIds
        }),
        onmessage: ({data}) => handleMessage(JSON.parse(data)),
        onerror: e => console.log('Error:', e),
        protocols: 'echo-protocol'
    });

    const handleMessage = ({channel, record}) => {
        switch (channel) {
            case 'intentioncreated':
                store.dispatch(callGetIntentions(record.facultyId, record.id));
                break;
            case 'intentionremoved':
                store.dispatch(removeIntention(record.id));
                break;
            case 'exchangecreated':
                store.dispatch(callGetExchangeInfo(record));
                break;
            default:
                break
        }
    };

    setTimeout(ws.reconnect, 10e3);

    return ws
};