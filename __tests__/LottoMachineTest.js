import lottoMachine from '../src/domains/LottoDomain.js';

describe('lottoMachine 테스트', () => {
  test('입력받은 숫자만큼 로또를 만드는 기능 확인', () => {
    // given
    const lottoCount = 8;

    // when
    const result = lottoMachine.make(lottoCount);

    // then
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(lottoCount);
  });
});
