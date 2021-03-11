import $, {Ret} from '../';

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

  test('$.ret(object).suc()', () => {
    let suc = false;
    $.ret({code: 0, message: 'ok'}).suc(() => {
      suc = true;
    });
    expect(suc).toBeTruthy();
  });

  test('$.ret(object).err()', () => {
    let err = false;
    $.ret({code: 1, message: 'error'}).err(() => {
      err = true;
    });
    expect(err).toBeTruthy();
  });

  test('$.ret(Ret).suc()', () => {
    let suc = false;
    $.ret(new Ret({code: 0, message: 'ok'})).suc(() => {
      suc = true;
    });
    expect(suc).toBeTruthy();
  });

  test('$.ret(Ret).err()', () => {
    let err = false;
    $.ret(new Ret({code: 1, message: 'error'})).err(() => {
      err = true;
    });
    expect(err).toBeTruthy();
  });

  test('Ret.suc', () => {
    const ret = new Ret({code: 0, message: 'Success'});
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('Success');
    expect(ret.isSuc()).toBeTruthy();
    expect(ret.isErr()).toBeFalsy();
  });

  test('Ret.err', () => {
    const ret = new Ret({code: 1, message: 'Error'});
    expect(ret.code).toBe(1);
    expect(ret.message).toBe('Error');
    expect(ret.isErr()).toBeTruthy();
  });

  test('Ret.err with invalid data', () => {
    const ret = new Ret(null);
    expect(ret.code).toBe(-1);
    expect(ret.isErr()).toBeTruthy();
  });

  test('Ret.new', () => {
    const ret = Ret.new({code: 0, message: 'Success'});
    expect(ret.code).toBe(0);
    expect(ret.message).toBe('Success');
    expect(ret.isSuc()).toBeTruthy();
  });

  test('http', async () => {
    const ret = await $.http({});
    expect(ret).toBeInstanceOf(Ret);
  });

  test('get', async () => {
    const ret = await $.get({});
    expect(ret).toBeInstanceOf(Ret);
  });

  test('post', async () => {
    const ret = await $.post({});
    expect(ret).toBeInstanceOf(Ret);
  });

  test('patch', async () => {
    const ret = await $.patch({});
    expect(ret).toBeInstanceOf(Ret);
  });

  test('put', async () => {
    const ret = await $.put({});
    expect(ret).toBeInstanceOf(Ret);
  });

  test('delete', async () => {
    const ret = await $.delete({});
    expect(ret).toBeInstanceOf(Ret);
  });
});
