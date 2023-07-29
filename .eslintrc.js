module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "standard-with-typescript",
    "overrides": [
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "project": "./tsconfig.json",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "rules": {
        "@typescript-eslint/key-spacing": "warn",
        "@typescript-eslint/indent": ["error", 4, {"SwitchCase": 1}],
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": false
            }
        }],
        "@typescript-eslint/consistent-type-assertions": ["error", {"assertionStyle": "angle-bracket"}]
    }
}
