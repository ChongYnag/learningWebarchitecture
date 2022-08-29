#!/usr/bin/env node
const lib = require("chongyang-test-lib");

// 注册一个 init 命令
const argv = require("process").argv

const command = argv[2];

const options = argv.slice(3);
if (options.length > 1) {
    let [option, param] = options;
    option = option.replace("--", "");
    if (command) {
        if (lib[command]) {
            lib[command]({ option, param });
        } else {
            console.log("无效的命令");
        }
    } else {
        console.log("请输入命令");
    }
}

if (command.startsWith('--') || command.startsWith('-')) {
    const globalOption = command.replace(/-+/g, "");
    if (["version", "V"].includes(globalOption)) {
        console.log("1.0.0")
    }
}

// 实现参数解析 --version 和init --name

// console.log("welcom imooc-test!!!222")