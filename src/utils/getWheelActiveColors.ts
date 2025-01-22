// Utility function that sets colors for specific wheel faces
export function getWheelActiveColors(face: number): { [key: string]: string } {
  // console.log('face for colors ==>', face);

  switch (face) {
    case 1:
      return {
        Circle035_1: '#fff', // white color
        Circle035: '#e71818', // pink
        Circle035_2: '#cc0d1e', // red
      }
    case 2:
      return {
        Circle007_1: '#fff', // white color
        Circle007: '#e71818', // pink
        Circle007_2: '#cc0d1e', // red
      }
    case 3:
      return {
        Circle006_1: '#fff', // white color
        Circle006: '#e71818', // pink
        Circle006_2: '#cc0d1e', // red
      }
    case 4:
      return {
        Circle032_1: '#fff', // white color
        Circle032: '#e71818', // pink
        Circle032_2: '#cc0d1e', // red
      }
    case 5:
      return {
        Circle026_1: '#fff', // white color
        Circle026: '#e71818', // pink
        Circle026_2: '#cc0d1e', // red
      }
    case 6:
      return {
        Circle025_1: '#fff', // white color
        Circle025: '#e71818', // pink
        Circle025_2: '#cc0d1e', // red
      }
    case 7:
      return {
        Circle008_1: '#fff', // white color
        Circle008: '#e71818', // pink
        Circle008_2: '#cc0d1e', // red
      }
    case 8:
      return {
        Circle023_1: '#fff', // white color
        Circle023: '#e71818', // pink
        Circle023_2: '#cc0d1e', // red
      }
    case 9:
      return {
        Circle029_1: '#fff', // white color
        Circle029: '#e71818', // pink
        Circle029_2: '#cc0d1e', // red
      }
    default:
      return {
        Circle035_1: '#fff', // white color
        Circle035: '#e71818', // pink
        Circle035_2: '#cc0d1e', // red
      } // Default colors for undefined cases
  }
}
