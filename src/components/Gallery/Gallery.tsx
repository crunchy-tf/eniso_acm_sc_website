import fs from 'fs';
import path from 'path';
import GalleryClient from './GalleryClient';

export default function Gallery() {
  const galleryDir = path.join(process.cwd(), 'public/images/gallery');
  let images: string[] = [];

  try {
    // Automatically read all files from the directory
    const files = fs.readdirSync(galleryDir);
    
    // Filter for common image extensions and exclude hidden files
    images = files
      .filter(file => !file.startsWith('.') && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
      .map(file => `/images/gallery/${file}`);
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  // Pass the dynamic list to the client component for animation
  return <GalleryClient images={images} />;
}
