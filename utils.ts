export interface coordinates {
  latitude: number;
  longitude: number;
}
export const getDistance = (cord1: coordinates, cord2: coordinates) => {
  const R = 3958.8; // miles
  const φ1 = cord1.latitude * Math.PI / 180; // φ, λ in radians
  const φ2 = cord2.latitude * Math.PI / 180;
  const Δφ = (cord2.latitude - cord1.latitude) * Math.PI / 180;
  const Δλ = (cord2.longitude - cord1.longitude) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2)
            + Math.cos(φ1) * Math.cos(φ2)
            * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // in miles
};
