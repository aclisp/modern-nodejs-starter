import { prefix } from "./utils.js";

export function delay(ms: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

async function main() {
	console.log(`${prefix()}before await`);
	await delay(3000);
	console.log(`${prefix()}after await`);
}

main();
