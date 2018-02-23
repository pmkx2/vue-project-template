// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        "plugin:vue/essential",
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        "standard"
    ],
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    // add your custom rules here
    rules: {
        /**
         * 错误等级：off(0) | warn(1) | error(2)
         * 处理方式：never | always
        */

        // 强制 generator 函数中 * 号周围使用一致的空格
        "generator-star-spacing": "off",
        // 强制使用一致的缩进
        "indent": [1, 4, {
            "SwitchCase": 1
        }],
        // 强制在 函数 的左括号之前使用一致的空格
        "space-before-function-paren": [0, "always"],
        // 操作符周围有空格
        "space-infix-ops": [2, { "int32Hint": false }],
        // 禁止使用多个空格
        "no-multi-spaces": [0],
        // 禁止出现未使用过的变量
        "no-unused-vars": [0],
        // 禁止出现多行空行
        "no-multiple-empty-lines": [0],
        //return 语句中不能有赋值表达式
        "no-return-assign": [0],
        // 禁用 debugger 调试器：生成环境禁止使用
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
}
