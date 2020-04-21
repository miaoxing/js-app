import $ from '../';

describe('miaoxing', () => {
  test('loading', async () => {
    expect($.loading).toBeInstanceOf(Object);
  });

  test('alert', async () => {
    expect($.alert).toBeInstanceOf(Object);
  });

  test('confirm', async () => {
    expect($.confirm).toBeInstanceOf(Object);
  });

  test('suc', async () => {
    expect($.suc).toBeInstanceOf(Object);
  });

  test('err', async () => {
    expect($.err).toBeInstanceOf(Object);
  });

  test('ret', async () => {
    expect($.ret).toBeInstanceOf(Object);
  });

  test('get', async () => {
    expect($.get).toBeInstanceOf(Object);
  });

  test('post', async () => {
    expect($.post).toBeInstanceOf(Object);
  });
});
