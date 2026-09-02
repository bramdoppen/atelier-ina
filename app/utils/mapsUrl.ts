export function mapsUrl(settings: {
  street: string
  postalCode: string
  city: string
}) {
  const query = encodeURIComponent(
    `${settings.street}, ${settings.postalCode} ${settings.city}`
  )
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}
