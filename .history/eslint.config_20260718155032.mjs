// @ts-check
import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tsEslint.config(
  // 👇 核心修复：把全局忽略配置放在最前面
  {
    ignores: ['.history/**/*'],
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
  },
  {
    rules: {
      quotes: ['error', 'single', { allowTemplateLiterals: false }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'error',
    },
  },
);