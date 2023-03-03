import { connect } from 'http2';
import app from './app';

import { MONGO_URI, PORT } from './util/config';
import { connectMongo } from './util/dbConnect';

try {
    app.listen(PORT, () => {
        console.log(`[+] Server is Listening on port : ${PORT}`);
    });
    connectMongo(MONGO_URI as string);
} catch (e) {
    console.error(`[#] Error : ${e}`);
}
