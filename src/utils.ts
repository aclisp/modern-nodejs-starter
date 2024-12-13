export function prefix(): string {
	const now = new Date();
	const timeStr = `${now.toTimeString().substring(0, 8)}.${now.getMilliseconds().toString().padStart(3, "0")}`;

	return `LOG ${timeStr} `;
}
