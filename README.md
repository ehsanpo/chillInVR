# ChillInVR - A-Frame VR Panorama Viewer

A VR panorama viewer built with A-Frame that lets you explore 36 different panoramic images in an immersive 360° environment.

## Features

- 🖼️ Browse through 36 panorama images
- ⬅️➡️ Previous/Next navigation buttons
- ⌨️ Keyboard controls (Arrow keys)
- 🎯 Immersive 360° viewing experience
- 🖱️ Drag to look around
- 🎵 Ready for ambient sound integration

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the App

Start the development server:
```bash
npm start
```

The app will automatically open in your browser at `http://localhost:8081`

Alternatively, you can use any static file server:
```bash
npx http-server -p 8081
```

## Controls

- **Next Button / Right Arrow**: Move to the next panorama
- **Previous Button / Left Arrow**: Go back to the previous panorama
- **Mouse Drag**: Look around the 360° environment
- **VR Mode**: Click the VR goggles icon (bottom right) if you have a VR headset

## Project Structure

```
chillInVR/
├── index.html         # Main HTML with A-Frame scene
├── app.js             # JavaScript for panorama switching
├── package.json       # Dependencies
├── static_assets/     # Panorama images (36 images)
└── img/              # Original images folder
```

## Future Enhancements

- [ ] Add ambient sound/music
- [ ] Add hotspots for interactive elements
- [ ] Implement thumbnail gallery view
- [ ] Add smooth transition effects between panoramas
- [ ] Add VR controller support
- [ ] Info overlay for each panorama

## Technologies

- **A-Frame 1.6.0** - Web framework for building VR experiences
- **WebXR** - For VR headset support
- **JavaScript (ES6+)** - Modern JavaScript features

## Browser Compatibility

Works in all modern browsers that support WebGL:
- Chrome/Edge (Desktop & Mobile)
- Firefox (Desktop & Mobile)
- Safari (Desktop & Mobile)
- VR Mode requires WebXR-compatible browser and VR headset
