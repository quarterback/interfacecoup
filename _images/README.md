# Image Assets

This directory contains images used throughout the site for speaking engagements, events, exhibitions, and projects.

## Directory Structure

```
_images/
├── speaking/        # Speaking engagement photos
│   └── [event-slug]/   # Individual event folders
├── events/          # Event and conference photos
├── exhibitions/     # Exhibition and project photos
├── headshots/       # Professional headshots and portraits
└── misc/            # Miscellaneous images
```

## Naming Conventions

Use lowercase with hyphens for all file and folder names:

- **Event folders**: `YYYY-MM-event-name/` (e.g., `2024-10-design-for-public/`)
- **Image files**: `descriptive-name.jpg` (e.g., `keynote-presentation.jpg`)
- **Numbered sequences**: `event-name-01.jpg`, `event-name-02.jpg`

## Recommended Image Sizes

| Usage | Recommended Size | Max File Size |
|-------|-----------------|---------------|
| Hero images (`.hero-image`) | 1200×400px | 200KB |
| Photo grid (`.photo-grid`) | 400×300px | 80KB |
| Accent images (`.accent-image`) | 600×400px | 100KB |
| Photo aside (`.photo-aside`) | 400×300px | 80KB |
| Thumbnails (`.thumbnail-gallery`) | 200×100px | 30KB |
| Photo block (`.photo-block`) | 800×450px | 150KB |

## Image Formats

- **JPEG**: Preferred for photographs
- **PNG**: Use for images with transparency
- **WebP**: Preferred where browser support allows (smaller file sizes)
- **SVG**: Use for icons and logos

## CSS Classes Reference

The following CSS classes are available for photo integration:

| Class | Description |
|-------|-------------|
| `.hero-image` | Full-width hero image with max-height constraint |
| `.accent-image` | General accent image with max-width of 600px |
| `.photo-grid` | Responsive grid layout for multiple photos |
| `.photo-block` | Container for single photo with caption |
| `.photo-caption` | Styled caption text for photos |
| `.photo-aside` | Floats image to the right on desktop, stacks on mobile |
| `.photo-header` | Container for hero image with text overlay |
| `.photo-header-overlay` | Gradient overlay with white text |
| `.thumbnail-gallery` | Horizontal scrolling thumbnail strip |

## Usage Examples

### Hero Image with Overlay
```html
<div class="photo-header">
  <img src="/_images/events/conference-venue.jpg" alt="Conference venue">
  <div class="photo-header-overlay">
    <h1>Event Title</h1>
  </div>
</div>
```

### Photo Grid
```html
<div class="photo-grid">
  <img src="/_images/events/photo-1.jpg" alt="Description 1">
  <img src="/_images/events/photo-2.jpg" alt="Description 2">
  <img src="/_images/events/photo-3.jpg" alt="Description 3">
</div>
```

### Photo with Caption
```html
<div class="photo-block">
  <img src="/_images/speaking/keynote.jpg" alt="Keynote presentation">
  <p class="photo-caption">Caption text describing the image.</p>
</div>
```

### Floating Aside Image
```html
<img class="photo-aside" src="/_images/headshots/speaker.jpg" alt="Speaker photo">
<p>Body text wraps around the image on desktop...</p>
<div style="clear: both;"></div>
```

## Optimization Tips

1. **Compress images** before uploading using tools like ImageOptim, TinyPNG, or Squoosh
2. **Use appropriate dimensions** - don't upload 4000px images for thumbnails
3. **Add descriptive alt text** for accessibility
4. **Use lazy loading** for images below the fold: `loading="lazy"`

## Related Pages

- [Event Template Example](/event-example.html) - Demonstrates photo integration patterns
- [Photo Gallery](/photos.html) - Browse all event and project photos
- [Speaking](/speaking.html) - Speaking engagements page
