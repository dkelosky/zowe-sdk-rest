import $ from "jquery"

// NOTE(Kelosky): or --> $.when($.ready).then( ...
document.addEventListener("DOMContentLoaded", () => {

    console.log(`Ready`)

    $(`#tso-form`).on(`submit`, () => {

        // clear code area
        $(`#code-area`).text(``);

        // TODO(Kelosky): get more fields
        // get form inputs
        const command = $(`#command-value`).val() as string;

        // log
        console.log(`command: '${command}'`);
        console.log(`${new URLSearchParams({ command }).toString()}`)

        const host = $(`#host`).text();
        const port = $(`#port`).text();

        const user = $(`#user-value`).val();
        const password = $(`#password-value`).val();

        console.log(`host: ${host} - port: ${port}`);
        console.log(`user: ${user} - password: ${password}`);

        const headers = new Headers();
        headers.append(`Authorization`, `Basic ` + btoa(user + `:` + password));

        // call REST API
        fetch(`http://${host}:${port}/tso?` + new URLSearchParams({ command }).toString(), { method: `POST`, headers }).then(async (response) => {

            const reader = response.body?.getReader();
            for await (const data of readData(reader!)) {

                console.log(`Got data response, length is ${data.length}`);
                const dataText = new TextDecoder(`utf-8`).decode(data);

                $(`#code-area`).append(dataText);
            }

        }).catch((e) => {
            console.error(`Unexpected error`)
            console.error(e)
        });

        return false;
    });
});

function readData(reader: ReadableStreamDefaultReader<Uint8Array>) {
    return {
        async*[Symbol.asyncIterator]() {
            let readResult = await reader.read();
            while (!readResult.done) {
                yield readResult.value;
                readResult = await reader.read();
            }
        },
    };
}
