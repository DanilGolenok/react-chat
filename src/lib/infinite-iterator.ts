export function* infiniteIterator<TData>(data: TData[]) {
	if (data.length === 0) return;

	let idx = 0;

	while (true) {
		if (idx >= data.length - 1) {
			idx = 0;
		}

		yield data[idx++];
	}
}
