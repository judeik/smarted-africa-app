Development Setup & Scripts
1. Install dependencies
npm install

2. Available npm scripts

| Script            | Description                                                                  |
| ----------------- | ---------------------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server.                                          |
| `npm run build`   | Builds the production-ready app into the `dist/` folder.                     |
| `npm run preview` | Previews the production build locally.                                       |
| `npm run format`  | Formats all source files using Prettier.                                     |
| `npm run lint`    | Lints all `.ts` and `.tsx` files using ESLint and fixes auto-fixable issues. |
| `npm run prepare` | Sets up Husky Git hooks (run automatically after `npm install`).             |

3. Husky + lint-staged

Pre-commit hook: Automatically formats and lints staged files before each commit.

Commit is blocked if ESLint finds errors or Prettier formatting is incorrect.

Only staged files are checked for speed.

Optional override:  git commit --no-verify
Use only if you must bypass hooks temporarily.

4. Recommended VS Code Extensions
 - ESLint

 - Prettier - Code formatter

 - EditorConfig

These ensure consistent formatting and linting in your local editor.

5. Notes

- .prettierrc.json → Prettier config

- .prettierignore → Files/folders Prettier ignores

- .eslintrc.json → ESLint + TypeScript + React config

- .eslintignore → Files/folders ESLint ignores

- .editorconfig → Universal editor settings (indentation, line endings, charset)

6. Quick Workflow

1. git pull → get latest code

2. npm install → install dependencies

3. Make changes in src/

4. git add <files> → stage your changes

5. git commit -m "Your message" → Husky + lint-staged auto-format & lint

6. git push → push clean, validated code