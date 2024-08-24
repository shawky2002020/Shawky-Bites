import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { icon, LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, marker, Marker, tileLayer } from 'leaflet';
import { Inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { Order } from '../../shared/models/order';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-map',  // Ensure this selector is correct
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
 export class MapComponent  {
  @Input() order!: Order;
  @Input() readonly = false;

  private readonly MARKER_ZOOM_LEVEL = 16;
  private readonly MARKER_ICON = icon({
    iconUrl: 'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });

  private readonly DEFAULT_LATLNG: LatLngTuple = [13.75, 21.62];

  @ViewChild('map', { static: true }) mapRef!: ElementRef;

  private map!: Map;
  private currentMarker!: Marker;

  constructor(private locationService: LocationService,@Inject(PLATFORM_ID) private platformId: any) { }
  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.initializeMap();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['order']) {
      if (typeof window !== 'undefined') {
        this.initializeMap();
      }
    }
  
    if (this.readonly && this.addressLatLng) {
      this.showLocationOnReadonlyMode();
    }
  }
  

  showLocationOnReadonlyMode() {
    if (!this.map || !this.addressLatLng) return;

    this.setMarker(this.addressLatLng);
    this.map.setView(this.addressLatLng, this.MARKER_ZOOM_LEVEL);

    this.map.dragging.disable();
    this.map.touchZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.scrollWheelZoom.disable();
    this.map.boxZoom.disable();
    this.map.keyboard.disable();
    this.map.off('click');
    this.map.tap?.disable();
    this.currentMarker.dragging?.disable();
  }

  initializeMap() {
    if (typeof window !== 'undefined')
    
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(leaflet => {
        this.map = leaflet.map(this.mapRef.nativeElement, {
          attributionControl: false
        }).setView(this.DEFAULT_LATLNG, 12);
  
        leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);
      }).catch(error => {
        console.error('Error loading Leaflet:', error);
      });
    }
  }
  
  
  findMyLocation() {
    this.locationService.getCurrentLocation().subscribe({
      next: (latlng) => {
        this.map.setView(latlng, this.MARKER_ZOOM_LEVEL);
        this.setMarker(latlng);
      }
    });
  }

  setMarker(latlng: LatLngExpression) {
    this.addressLatLng = latlng as LatLng;
    if (this.currentMarker) {
      this.currentMarker.setLatLng(latlng);
      return;
    }

    import('leaflet').then(({ marker, icon }) => {
      this.currentMarker = marker(latlng, {
        draggable: true,
        icon: this.MARKER_ICON
      }).addTo(this.map);

      this.currentMarker.on('dragend', () => {
        this.addressLatLng = this.currentMarker.getLatLng();
      });
    });
  }

  set addressLatLng(latlng: LatLng) {
    if (!latlng.lat.toFixed) return;

    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressLatLng = latlng;
    console.log(this.order.addressLatLng);
  }

  get addressLatLng() {
    return this.order.addressLatLng!;
  }
}




