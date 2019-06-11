import { registerMethod } from 'did-resolver';
import createIpid from 'did-ipid';

const registerResolver = (ipfs) => {
    const ipid = createIpid(ipfs);

    registerMethod('ipid', async (did, parsed) => {
        const didDocument = await ipid.resolve(`did:ipid:${parsed.id}`);

        return didDocument;
    });
};

export default registerResolver;
