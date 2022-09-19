import Chalk from "chalk";

export function info(msg: string) {
  console.log(Chalk.blue(`[INFO]  ${new Date().toISOString()}: ${msg}`));
}

export function debug(msg: string) {
  console.log(Chalk.green(`[DEBUG] ${new Date().toISOString()}: ${msg}`));
}

export function warn(msg: string) {
  console.log(Chalk.yellow(`[WARN]  ${new Date().toISOString()}: ${msg}`));
}

export function error(msg: string) {
  console.log(Chalk.red(`[ERROR] ${new Date().toISOString()}: ${msg}`));
}
