import { describe, expect, it } from 'vitest';

import { scn } from './scn';

describe('positive scenarios', () => {
  it('should only return the base class if there are no additional classes', () => {
    expect(scn('base')).toBe('base');
  });

  it('must combine the base class and additional classes, if passed', () => {
    expect(
      scn('base', {
        'additionalClassName-1': true,
        'additionalClassName-2': true
      })
    ).toBe('base additionalClassName-1 additionalClassName-2');
  });

  it('should ignore false extra classes', () => {
    expect(
      scn('base', {
        'additionalClassName-1': false,
        'additionalClassName-2': false
      })
    ).toBe('base');
  });

  it('should only return the base class if the additional classes are an empty object', () => {
    expect(scn('base', {})).toBe('base');
  });

  it('should combine only active additional classes', () => {
    expect(
      scn('base', {
        'additionalClassName-1': false,
        'additionalClassName-2': true
      })
    ).toBe('base additionalClassName-2');
  });
});
