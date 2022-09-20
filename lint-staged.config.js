module.exports = {
  'packages/common/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/common',
    'npm run lint:styles --workspace=@example/common',
    () => 'npm run lint:types --workspace=@example/common',
    () => 'npm run lint:types --workspace=@example/main',
    () => 'npm run lint:types --workspace=@example/admin',
  ],
  'packages/tools/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/tools',
  ],
  'apps/main/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/main',
    'npm run lint:styles --workspace=@example/main',
    () => 'npm run lint:types --workspace=@example/main',
  ],
  'apps/admin/**/*.{js,jsx,ts,tsx}': [
    'npm run lint --workspace=@example/admin',
    'npm run lint:styles --workspace=@example/admin',
    () => 'npm run lint:types --workspace=@example/admin',
  ],
  '**/*.{js,jsx,ts,tsx}': ['yaspeller --only-errors'],
};
