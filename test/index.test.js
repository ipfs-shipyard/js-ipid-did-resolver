import createIpid from 'did-ipid';
import resolve from 'did-resolver';
import registerResolver from '../src';

jest.mock('did-ipid', () => jest.fn(() => ({
    resolve: jest.fn((did) => ({ id: did })),
})));

it('should register the ipid resolver', async () => {
    const mockIpfs = {};

    registerResolver(mockIpfs);

    const didDoc = await resolve('did:ipid:foo');

    expect(didDoc).toEqual({ id: 'did:ipid:foo' });
    expect(createIpid).toHaveBeenCalledTimes(1);
    expect(createIpid).toHaveBeenCalledWith(mockIpfs);
    expect(createIpid.mock.results[0].value.resolve).toHaveBeenCalledTimes(1);
    expect(createIpid.mock.results[0].value.resolve).toHaveBeenCalledWith('did:ipid:foo');
});

it('should just take the did, ignoring fragments and parts', async () => {
    const mockIpfs = {};

    registerResolver(mockIpfs);

    const didDoc = await resolve('did:ipid:foo/foo#bar');

    expect(didDoc).toEqual({ id: 'did:ipid:foo' });
    expect(createIpid.mock.results[0].value.resolve).toHaveBeenCalledTimes(1);
    expect(createIpid.mock.results[0].value.resolve).toHaveBeenCalledWith('did:ipid:foo');
});
