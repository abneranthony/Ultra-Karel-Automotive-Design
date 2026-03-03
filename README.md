# Ultra-Karel-Automotive-Design

This project utilizes the Ultra Karel programming environment to make a multi-layered visual of a car. Unlike standard graphics libraries, this project required managing specific Karel API methods to handle object dimensions and positioning on the plane. 

Geometric Layering: Developed a "back-to-front" strategy to ensure wheels and windows are correctly layered over the car. 
Precision Coordinates: Calculated exact (x, y) values to maintain the car's proportions across a 2D canvas. 
Color Logic: Implemented hex code and string-based color values to distinguish different automotive components.

This project demonstrates my ability to adapt to different JavaScript interfaces (standard graphics to Ultra Karel). Mastering these libraries is part of my preparation for coding in Java.

[Click here to view the live interactive demo on CodeHS!](https://codehs.com/share/id/create-your-ultrakarel-image-GGM8hV/run)

*it might take a few seconds to load so please be patient!*

How to run on your own:

1. Copy the code in Final Project.js.
2. Paste it into the CodeHS Sandbox or any JavaScript environment that supports the CodeHS Graphics Library.
3. Press Run.

<details>
<summary><b>Click to view my full project reflections</b></summary>


API Adaptation: I learned how to transition between different programming environments, moving from the standard JavaScript Graphics library to the Ultra Karel API. This required learning new specific methods while maintaining the same logical foundation. 
Layering and Depth Perception: I mastered the "Painter's Algorithm" logic—the concept that code executed later in the sequence appears "on top" of earlier code. I applied this to ensure the car’s tires and windows were correctly layered over the chassis. 
Coordinate Geometry & Proportions: I improved my ability to use a 2D coordinate system. Instead of placing shapes randomly, I had to calculate relative positions to ensure the car stayed together even if the main body moved. I also placed the colors in the correct order and used karel to maneuver around successfully.

</details>
