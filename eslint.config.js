import globals from 'globals';
import { eslint } from '@ljtang2009/lint-configuration';
import _ from 'lodash';

const baseConfig = _.merge(
  _.cloneDeep(eslint.buildIn.default),
  eslint.stylistic.default,
  {
    languageOptions: {
      sourceType: 'module',
      globals:    {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
);

export default [
  {
    name: 'js',
    ..._.merge(_.cloneDeep(baseConfig), {
      files:   ['**/*.js', '**/*.cjs', '**/*.mjs'],
      ignores: [
        'dist/**/*',
        'coverage/**/*',
        'packages/**/*',
      ],
    }),
  },
  {
    name: 'json',
    ..._.merge(_.cloneDeep(eslint.json.default), {
      files:   ['**/*.json', '**/*.jsonc', '**/*.json5'],
      ignores: [
        'coverage/**/*',
        'package.json',
        'packages/**/*',
      ],
    }),
  },
];
