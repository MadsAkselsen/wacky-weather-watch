export function formatDate(date: Date): string {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// Create a new date for comparison
	const today = new Date();

	// Compare the date passed to the function to today's date
	const dayOfWeek =
		date.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)
			? 'Today'
			: days[date.getDay()];

	return dayOfWeek;
}

export function convertTemperature(
	celsius: number,
	temperatureUnit: string,
): number {
	if (temperatureUnit === 'Celsius') {
		return celsius; // No conversion needed
	} else {
		return (celsius * 9) / 5 + 32; // Convert Celsius to Fahrenheit
	}
}

export function convertSpeed(speedKmh: number, unit: string): string {
	let convertedSpeed: number;

	switch (unit) {
		case 'm/s':
			convertedSpeed = speedKmh / 3.6;
			break;
		case 'Knots':
			convertedSpeed = speedKmh / 1.852;
			break;
		default:
			convertedSpeed = speedKmh; // No conversion needed for km/h
	}

	return `${convertedSpeed.toFixed(2)} ${unit}`;
};
