export default function meterPerSecondsConverter(kmh: number): number {
  return Math.round(kmh * 0.277778);
}
