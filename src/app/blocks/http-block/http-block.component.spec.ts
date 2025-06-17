import { HttpBlockComponent } from './http-block.component';
import { ContextDataService } from '../../services/context-data.service';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';
import { AppSettingsService } from '../../services/app-settings.service';

describe('extractNextPageUrl', () => {
    let component: HttpBlockComponent;
    let contextDataServiceMock: ContextDataService;
    let httpClientMock: HttpClient;
    let matSnackBarMock: MatSnackBar;
    let changeDetectorRefMock: ChangeDetectorRef;
    let appSettingsServiceMock: AppSettingsService;

    beforeEach(() => {
        contextDataServiceMock = jasmine.createSpyObj('ContextDataService', ['getGlobalContext']);
        httpClientMock = jasmine.createSpyObj('HttpClient', ['get']);
        matSnackBarMock = jasmine.createSpyObj('MatLegacySnackBar', ['open']);
        changeDetectorRefMock = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);
        appSettingsServiceMock = jasmine.createSpyObj('AppSettingsService', ['get']);
        component = new HttpBlockComponent(contextDataServiceMock, matSnackBarMock, httpClientMock, changeDetectorRefMock, appSettingsServiceMock);
    });

    it('should extract the next page URL from a link header', () => {
        const linkHeader = '<https://example.com/page2>; rel="next"';
        expect(component.extractNextPageUrl(linkHeader)).toEqual('https://example.com/page2');
    });

    it('should return null if no next link is present', () => {
        const linkHeader = '<https://example.com/page2>; rel="last"';
        expect(component.extractNextPageUrl(linkHeader)).toBeNull();
    });

    it('should return null for an invalid link header', () => {
        const linkHeader = 'invalid link header';
        expect(component.extractNextPageUrl(linkHeader)).toBeNull();
    });

    it('should return null for an empty string', () => {
        expect(component.extractNextPageUrl('')).toBeNull();
    });
});