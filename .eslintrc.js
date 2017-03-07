module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
      "sourceType": "script"
    },
    "extends": "airbnb-base",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-var": "off",
        "comma-dangle": [
          "error",
          "never"
        ],
        "prefer-arrow-callback": "off",
        "strict": [
          "error",
          "function"
        ],
        "no-plusplus": [
          "error",
          { "allowForLoopAfterthoughts": true }
        ]
    }
};
