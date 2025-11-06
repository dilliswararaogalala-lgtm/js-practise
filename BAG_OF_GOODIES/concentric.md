# Concentric Circles

## Description

This program generates a colorful concentric circle pattern using emojis. It creates a grid where the color of each position depends on its distance from the center point, creating a rainbow-like circular pattern.

## Usage

Run the program using Deno:

```
deno run concentric.js [width] [height] [centerX] [centerY] [radius]
```

Parameters (all optional):

- `width`: Width of the grid (default: 30)
- `height`: Height of the grid (default: 30)
- `centerX`: X-coordinate of the center (default: 15)
- `centerY`: Y-coordinate of the center (default: 15)
- `radius`: Radius of the largest circle (default: 13)

Example:

```
deno run concentric.js 40 20 20 10 15
```

## Experiment

Try changing the parameters to create different sized circles and patterns. You can also modify the `chooseChar` function to use different colors or change the ratio thresholds to adjust the width of each color band.

## Key Concepts to Explore

1. **Euclidean Distance** - The program calculates the distance between points using the Pythagorean theorem.
2. **Cartesian Coordinates** - The program uses a grid system with x and y coordinates.
3. **Color Mapping** - Distance values are mapped to different colors based on thresholds.
4. **Conditional Logic** - The program uses if-statements to determine which color to use based on the distance.

### Real-world Applications

- **Image Processing** - Similar distance calculations are used in image filters and effects
- **Game Development** - Distance calculations are essential for collision detection and area-of-effect abilities
- **Data Visualization** - Concentric patterns are used to visualize data with radial significance
- **Design and Art** - Color gradients and concentric patterns are fundamental in graphic design

Try experimenting with the color scheme, the distance thresholds, and even the character set to create your own unique patterns!
