import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements OnInit, OnDestroy {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  map: any;
  private platformId = inject(PLATFORM_ID);

  async ngOnInit() {
    if (isPlatformBrowser(this.platformId)) { // SSR check to ensure this runs in the browser as GL JS requires a browser environment
      const mapboxgl = (await import('mapbox-gl')).default // dynamically import mapbox-gl as the default export

      // Create a new map instance
      this.map = new mapboxgl.Map({
        accessToken: 'pk.eyJ1Ijoic295anVhbmRlbGdhZG8iLCJhIjoiY21mbWZ6ZmFzMDF0djJqcXp5MmF6bnkxeiJ9.4MxEetjDrbZZsM2zPp0gDw',
        container: this.mapContainer.nativeElement, // Reference to the map container element
        center: [-98.54818, 40.00811], // Center coordinates for map over the continental US
        zoom: 4, // Initial zoom level
      });
    }
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }
}
