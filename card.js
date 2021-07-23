#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:kuljeetsingh951@gmail.com");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("See you Again!!.\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                      Kuljeet Singh"),
    handle: chalk.white("@Kuljeet-123"),
    work: `${chalk.white("Software Engineer at")} ${chalk
        .hex("#2b82b2")
        .bold("Plexusmd")}`,
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("Kuljeet_123"),
    github: chalk.gray("https://github.com/") + chalk.green("Kuljeet-123"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("kuljeet-singh-21836517a/"),
    web: chalk.cyan("https://kuljeet-123.github.io/"),
    npx: chalk.red("npx") + " " + chalk.white("kuljeet"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Lemme start with my brief intro first, myself Kuljeet Singh "
        )}`,
        `${chalk.italic("and I'm a Full Stack Developer with a passion for ")}`,
        `${chalk.italic("front end development, design and back end development.")}`,
        `${chalk.italic("And currently I'm a Software Engineer at Plexusmd.")}`,
        `${chalk.italic("My inbox is always open. Whether you have a")}`,
        `${chalk.italic(
            "question or just want to say hi, I will try "
        )}`,
        `${chalk.italic(
            "my best to get back to you!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());