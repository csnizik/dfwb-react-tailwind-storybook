export const fontColor = (color) => {
    switch (color) {
      case 'Crystal-Clear Teal':
      case 'teal':
        return 'text-teal';
      case 'Sunny-Sky Blue':
      case 'blue':
        return 'text-blue';
      case 'Sunset Pink':
      case 'pink':
        return 'text-pink';
      case 'Sea Foam Teal':
      case 'teal-dark':
        return 'text-teal-dark';
      case 'Navy Sky':
      case 'blue-dark':
      case 'navy':
        return 'text-blue-dark';
      case 'Moss Green':
      case 'green':
        return 'text-green';
      case 'Dusty Rose':
      case 'red':
        return 'text-red';
      case 'Whitewash White':
      case 'white-dark':
      case 'off-white':
        return 'text-white-dark';
      case 'Black':
        return 'text-black';
      case 'Gray':
      case 'gray':
        return 'text-gray-500';
      default:
        return 'text-current';
    }
  };