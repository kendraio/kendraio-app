import { MapBlockComponent } from "./map-block.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { geoJSON } from "leaflet";

const mockGeoJsonData = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-5.0, 52.0],
            [-4.0, 52.0],
            [-4.0, 53.0],
            [-5.0, 53.0],
            [-5.0, 52.0],
          ],
        ],
      },
      properties: {
        name: "Mock Country",
      },
    },
  ],
};

describe("MapBlockComponent", () => {
  let component: MapBlockComponent;
  let fixture: ComponentFixture<MapBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapBlockComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MapBlockComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should handle missing lat/long values if country is provided", (done) => {
    const mockResponse = new Response(JSON.stringify(mockGeoJsonData), {
      status: 200,
      headers: { "Content-type": "application/json" },
    });

    spyOn(window, "fetch").and.returnValue(Promise.resolve(mockResponse));

    const data = [{ country: "GBR", label: "United Kingdom" }];
    component.onData(data, false);

    setTimeout(() => {
      try {
        expect(component.layers.length).toBe(1); // Should create a single layer for the country
        done();
      } catch (error) {
        done.fail(error);
      }
    }, 100); // Allow async operations to complete
  });

  it("should apply custom styles to country areas", () => {
    component.onConfigUpdate({
      countryStyle: { color: "red", fillColor: "pink" },
    });
    expect(component.countryStyle.color).toBe("red");
    expect(component.countryStyle.fillColor).toBe("pink");
  });

  it("should create a custom marker icon with sanitised HTML", () => {
    const data = [
      {
        lat: `51.5074`,
        long: `-0.1278`,
        label: "London",
        customPin: '<span class="test">Test</span>',
      },
    ];
    component.onData(data, false);
    expect(component.layers[0].options.icon.options.html).toContain(
      '<span class="test">Test</span>'
    );
  });

  it("should handle both lat/long and country in the same object", (done) => {
    const mockResponse = new Response(JSON.stringify(mockGeoJsonData), {
      status: 200,
      headers: { "Content-type": "application/json" },
    });

    spyOn(window, "fetch").and.returnValue(Promise.resolve(mockResponse));

    const data = [
      {
        country: "GBR",
        lat: `51.5074`,
        long: `-0.1278`,
        label: "London, United Kingdom",
        customPin: "🇬🇧",
      },
    ];
    component.onData(data, false);

    setTimeout(() => {
      try {
        expect(component.layers.length).toBe(2); // Should create layers for both the pin and the country
        done();
      } catch (error) {
        done.fail(error);
      }
    }, 100); // Allow async operations to complete
  });

  it("should update map height and zoom level based on configuration", () => {
    component.onConfigUpdate({ height: 600, zoom: 10 });
    expect(component.height).toBe(600);
    expect(component.options.zoom).toBe(10);
  });

  it("should handle empty data input", () => {
    component.onData([], false);
    expect(component.layers.length).toBe(0); // No layers should be created
  });

  it("should create a custom marker icon with plain text", () => {
    const data = [
      {
        lat: `51.5074`,
        long: `-0.1278`,
        label: "London",
        customPin: "📍",
      },
    ];
    component.onData(data, false);
    expect(component.layers[0].options.icon.options.html).toContain("📍");
  });

  it("should use cached GeoJSON data if available", (done) => {
    const countryCode = "GBR";
    component.countryCache[countryCode] = mockGeoJsonData;

    const spyFetch = spyOn(window, "fetch");

    const data = [{ country: countryCode, label: "United Kingdom" }];
    component.onData(data, false);

    setTimeout(() => {
      try {
        expect(spyFetch).not.toHaveBeenCalled(); // Fetch should not be called if data is cached
        expect(component.layers.length).toBe(1); // Should create a single layer for the country
        done();
      } catch (error) {
        done.fail(error);
      }
    }, 100); // Allow async operations to complete
  });
});
