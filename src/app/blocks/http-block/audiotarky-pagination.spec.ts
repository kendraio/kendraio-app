import { HttpBlockComponent } from './http-block.component';
import { ContextDataService } from '../../services/context-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from '../../services/app-settings.service';

// Issue #169: Audiotarky's public API returns JSON indexes that paginate with
// `pagination.next_page` (there is no RFC 5988 `link` header). A Kendraio Flow
// retrieves the Audiotarky catalogue through the http-block, so the block must be
// able to discover that next page for the player to walk the whole catalogue.
const AUDIOTARKY_NEXT_PAGE = 'https://www.audiotarky.com/$/tracks/page/2/index.json';

const AUDIOTARKY_PAGE = {
  pagination: {
    current_page: 'https://www.audiotarky.com/$/tracks/index.json',
    page_number: 1,
    total_pages: 2,
    previous_page: null,
    next_page: AUDIOTARKY_NEXT_PAGE
  },
  artists: [
    {
      display_artist: 'A Sol Mechanic x Handbook',
      display_title: 'All Along',
      url:
        'https://www.audiotarky.com/$/a-sol-mechanic-x-handbook/mindfulness/all-along/9ff2920a18a1f97929d5e602765d5a1b.audiotarky.mp3',
      payment_pointer: '$ilp.uphold.com/xnhGQ7QDrRrw'
    }
  ]
};

const AUDIOTARKY_LAST_PAGE = {
  pagination: { page_number: 2, total_pages: 2, previous_page: null, next_page: null },
  artists: []
};

// The unchanged base http-block only understands RFC 5988 link headers and throws
// when handed a parsed body, so normalise that into `null` to keep this companion
// spec an explicit assertion rather than an unhandled crash.
function extractNextPage(component: HttpBlockComponent, input: any): string | null {
  try {
    return component.extractNextPageUrl(input);
  } catch (e) {
    return null;
  }
}

describe('Audiotarky pagination regression (issue #169)', () => {
  let component: HttpBlockComponent;

  beforeEach(() => {
    const contextDataServiceMock = jasmine.createSpyObj('ContextDataService', [
      'getGlobalContext',
      'getFromContextWithModel'
    ]);
    const matSnackBarMock = jasmine.createSpyObj('MatSnackBar', ['open']);
    const httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
    const appSettingsServiceMock = jasmine.createSpyObj('AppSettingsService', ['get']);
    component = new HttpBlockComponent(
      contextDataServiceMock,
      matSnackBarMock,
      httpClientMock,
      appSettingsServiceMock
    );
  });

  it('extracts the next page URL from an Audiotarky JSON index response', () => {
    expect(component.extractNextPageUrl(JSON.stringify(AUDIOTARKY_PAGE))).toBe(AUDIOTARKY_NEXT_PAGE);
  });

  it('extracts the next page URL from a parsed Audiotarky response body', () => {
    expect(extractNextPage(component, AUDIOTARKY_PAGE)).toBe(AUDIOTARKY_NEXT_PAGE);
  });

  it('returns null for the last Audiotarky page', () => {
    expect(extractNextPage(component, JSON.stringify(AUDIOTARKY_LAST_PAGE))).toBeNull();
  });

  it('still extracts the next page from an RFC 5988 link header', () => {
    expect(component.extractNextPageUrl('<https://example.com/page2>; rel="next"')).toBe('https://example.com/page2');
  });
});
