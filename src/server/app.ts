import express from "express";
import * as dotenv from "dotenv";
import { IssueTso } from "@zowe/zos-tso-for-zowe-sdk";
import { Session } from "@zowe/imperative";

dotenv.config();
const host = process.env.HOST ?? `localhost`;
const port = parseInt(process.env.PORT ?? `3001`, 10);
const app = express();

app.post(`/tso`, async (req, res, next) => {

    const base64EncodedAuth = req.headers.authorization?.trim().split(' ')[1];

    const command = req.query.command as string || `time`;
    const account = req.query.account as string || `IZUACCT#`;

    const session = new Session({
        type: `basic`,
        hostname: process.env.ZOSMF_HOST,
        port: parseInt(process.env.ZOSMF_PORT ?? `3001`, 10),
        base64EncodedAuth,
    });

    // console.log(req.headers.authorizatiimage.pngon)
    console.log(`command = '${command}' account = '${account}'`);

    try {
        const tso = await IssueTso.issueTsoCommand(session, account, command);
        res.setHeader(`Content-Type`, `text/plan`);
        return res.send(tso.commandResponse);
    } catch (e) {
        // do nothing
        next(e);
    }

});

app.use(`/`, express.static('web'));

app.listen(port, host, () => {
    console.log(`Started http://${host}:${port}`);
});
