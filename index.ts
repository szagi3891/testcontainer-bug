import { GenericContainer, Wait } from 'testcontainers';

const main = async (): Promise<void> => {

    const container = await new GenericContainer('surrealdb/surrealdb:1.0.0')
        .withCommand(['start', '--strict', '--auth', '--log', 'debug', '-u', 'root', '-p', 'root', '--allow-guests'])
        .withExposedPorts(8000)
        .start();

    const host = container.getHost();
    const port = container.getMappedPort(8000);

    console.info(`host=${host} port=${port}`);

    //space for my tests

    await container.stop();
};

main().then(() => {
    console.info('end');
}).catch((error) => {
    console.error(error);
});
