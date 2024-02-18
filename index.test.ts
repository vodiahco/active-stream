import {ActiveStream} from './src';

test('Test that data is received', () => {
    let name = '';
    const activeStream = new ActiveStream();
    activeStream.stream.subscribe((event: any) => {
        name = event.data?.name;
        expect(name).toBe('Victor');
        expect(event.name).toBe('change-name');
    });
    activeStream.request({name: 'change-name', data: {name: 'Victor'}});
});
