export const getPastelColor = (input: number): string => {
  // Валидация входа
  if (input < 1 || input > 500) {
      throw new Error("Input must be between 1 and 500");
  }

  // Масштабирование входа до 32-битного значения
  const seed = (input * 8589934) >>> 0; // 8589934 = 2^32 / 500
  
  let state = seed;
  const rand = () => {
      state = (state * 1664525 + 1013904223) % 4294967296;
      return state / 4294967296;
  };

  // Генерация HSL
  const hue = Math.floor(rand() * 360);
  const saturation = 70 + rand() * 30;
  const lightness = 80 + rand() * 15;

  // Конвертация HSL в HEX (без изменений)
  const h = hue / 360;
  const s = saturation / 100;
  const l = lightness / 100;
  
  let r, g, b;
  
  if (s === 0) {
      r = g = b = l;
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
  
  const toHex = (x: number) => Math.round(x * 255).toString(16).padStart(2, '0');
  
  return `${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};