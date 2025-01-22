/* eslint-disable no-console */
// this utility function, sets Dice Rotation angle
export async function getWheelRotationAngle(
  face: number
): Promise<{ x: number; y: number; z: number }> {
  console.log('face ==>', face)
  return new Promise((resolve) => {
    switch (face) {
      case 1:
        resolve({ x: 0, y: 0, z: 3.2 }) // Face x0 (blue color)
        break
      case 2:
        resolve({ x: 0, y: 0, z: 4 }) //  Face x1
        break
      case 3:
        resolve({ x: 0, y: 0, z: 4.45 }) //  Face x5 (white color)
        break
      case 4:
        resolve({ x: 0, y: 0, z: 5.2 }) //  Face x50 (white color)
        break
      case 5:
        resolve({ x: 0, y: 0, z: 7.512 }) // Face x1 (blue color)
        break
      case 6:
        resolve({ x: 0, y: 0, z: 7.896 }) //  Face x0 (white color)
        break
      case 7:
        resolve({ x: 0, y: 0, z: 9.91 }) //  Face x1000 (white color)
        break
      case 8:
        resolve({ x: 0, y: 0, z: 15 }) //  Face x100 (white color)
        break
      case 9:
        resolve({ x: 0, y: 0, z: 0.123 }) //  Face x300
        break
      default:
        resolve({ x: 0, y: 0, z: 3.2 }) // if its value is 0 or Default case if face is out of range ==> Face x0 (blue color)
    }
  })
}
