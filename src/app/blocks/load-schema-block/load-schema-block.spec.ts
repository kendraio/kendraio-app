// Jasmine spec tests for the LoadSchemaBlock component
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadSchemaBlockComponent } from './load-schema-block.component';
import get from 'lodash/get';

const propertySchema = {
  "name": "property",
  "description": "",
  "data": {
    "properties": [
      {
        "type": "ObjectReference",
        "key": "owner",
        "title": "Owner",
        "config": "person"
      }
    ]
  }
};

const peopleRecords = [
  {
    "uuid": "bob",
    "label": "Bob",
    "schemaName": "person",
    "data": {
      "name": "Bob"
    }
  },
  {
    "uuid": "dave",
    "label": "Dave",
    "schemaName": "person",
    "data": {
      "name": "Dave"
    }
  }
];

const personSchema = {
  "name": "person",
  "description": "",
  "data": {
    "properties": [
      {
        "type": "Text",
        "key": "name",
        "title": "Name",
        "config": false
      }
    ]
  }
};

describe('LoadSchemaBlockComponent', () => {
  let component: LoadSchemaBlockComponent;
  let fixture: ComponentFixture<LoadSchemaBlockComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadSchemaBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  `Testing transclusion of selected record objects.
   ObjectReference accepts a schema config name, and populates a list of records from the database for selection by the user.
   E.g: If a list of person records were stored in the database, a ObjectReference
   can be used to transclude a single selected person record for selection.`
  it('should load a "property" schema and list of "person" records from the database', async () => {
    // Arrange:

    // Mock the database calls
    spyOn(component, 'loadSchemaFromDatabase').and.callFake(async (schemaName) => {
      if (schemaName === 'property') {
        return [propertySchema];
      }
      if (schemaName === 'person') {
        return [personSchema];
      }
    });
    spyOn(component, 'loadRecords').and.callFake(async (schemaName) => {
      if (schemaName === 'person') {
        return peopleRecords;
      }
    });

    // Act:
    component.onConfigUpdate({ schema: 'property' });
    await component.onData({}, false);

    // Assert:
    component.output.subscribe(output => {
      const oneOfPeople = get(output, 'jsonSchema.definitions.property.properties.owner.oneOf');
      expect(oneOfPeople).toBeDefined();
      // Bob and Dave are the name values, represented as oneOf titles:
      expect(get(oneOfPeople, '[0].title')).toBe('Bob');
      expect(get(oneOfPeople, '[1].title')).toBe('Dave');
    });

  });
});