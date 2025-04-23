export const getRandomPastelColor = () => {
    // Генерация значений HSL
    const hue = Math.floor(Math.random() * 360);       // Тон (0-360)
    const saturation = 70 + Math.random() * 30;        // Насыщенность (70-100%)
    const lightness = 80 + Math.random() * 15;         // Светлота (80-95%)
  
    // Конвертация HSL в HEX
    const h = hue / 360;
    const s = saturation / 100;
    const l = lightness / 100;
    
    let r, g, b;
    
    if (s === 0) {
      r = g = b = l; // Ахроматический цвет
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      };
      
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    
    // Конвертация в HEX
    const toHex = (x: number) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    
    return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}