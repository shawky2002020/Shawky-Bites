import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as L from 'leaflet';

import { Order } from '../../shared/models/order';
import { LocationService } from '../../../services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnChanges, AfterViewInit {
  @Input() order!: Order;
  @Input() readonly = false;

  private readonly MARKER_ZOOM_LEVEL = 16;
  private readonly MARKER_ICON = L.icon({
    iconUrl: 'https://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });

  private readonly DEFAULT_LATLNG: L.LatLngTuple = [13.75, 21.62];

  @ViewChild('map', { static: true }) mapRef!: ElementRef;

  private map!: L.Map;
  private currentMarker!: L.Marker;

  constructor(private locationService: LocationService, @Inject(PLATFORM_ID) private platformId: any) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMap();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['order'] && isPlatformBrowser(this.platformId)) {
      this.initializeMap();
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
    if (isPlatformBrowser(this.platformId)) {
      import('leaflet').then(leaflet => {
        this.map = leaflet.map(this.mapRef.nativeElement, {
          attributionControl: false
        }).setView(this.DEFAULT_LATLNG, 12);

        leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
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

  setMarker(latlng: L.LatLngExpression) {
    this.addressLatLng = latlng as L.LatLng;
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

  set addressLatLng(latlng: L.LatLng) {
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
