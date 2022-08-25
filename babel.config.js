module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current"}}],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "@modules": "./src/modules",
                    "@shared": "./src/shared",
                    "@config": "./src/config",
                    "@constants": "./src/constants",
                    "@lib": "./src/lib"
                }
            }
        ],
        "babel-plugin-transform-typescript-metadata",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: false
            }
        ],
        ["@babel/plugin-proposal-private-methods", { "loose": false }]
    ]
}