// Jasmine spec tests for the LoadSchemaBlock component
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadSchemaBlockComponent } from './load-schema-block.component';
import get from 'lodash/get';

const propertySchema = [{
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
}];

const personRecords = [
  {
    "uuid": "09bcec09-dd7f-4ca1-8646-e449c4808982",
    "adapterName": "schemas",
    "schemaName": "person",
    "data": {
      "name": "Jill"
    },
    "label": "Jill"
  },
  {
    "uuid": "344551c7-b03c-4dd9-a736-5ec609ce4e13",
    "adapterName": "schemas",
    "schemaName": "person",
    "data": {
      "name": "bob"
    },
    "label": "bob"
  },
  {
    "uuid": "35d1e712-8dcb-42a8-a1fe-7173b3ea3d08",
    "adapterName": "schemas",
    "schemaName": "person",
    "data": {
      "name": "dave"
    },
    "label": "dave"
  }
];

const personSchema = [{
  "uuid": "a2b84f07-642f-4433-915e-e6781203ba22",
  "adapterName": "schemas",
  "schemaName": "schemas",
  "data": {
    "uuid": "a2b84f07-642f-4433-915e-e6781203ba22",
    "properties": [
      {
        "key": "name",
        "title": "name",
        "type": "Text"
      }
    ],
    "name": "person",
    "description": "person",
    "label": "name"
  },
  "label": "person"
}];

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
        return propertySchema;
      }
      if (schemaName === 'person') {
        return personSchema;
      }
    });
    spyOn(component, 'loadRecords').and.callFake(async (schemaName) => {
      if (schemaName === 'person') {
        return personRecords;
      }
    });

    // Act:

    component.onConfigUpdate({ schema: 'property' });
    await component.onData({}, false);

    // Assert:
    
    const oneOfPeople = get(component.lastOutput, 'jsonSchema.definitions.property.properties.owner.oneOf');

    expect(oneOfPeople).toBeDefined();
    // Jill, bob and dave are the name values, represented as oneOf titles:
    expect(get(oneOfPeople, '[0].title')).toBe('Jill');
    expect(get(oneOfPeople, '[1].title')).toBe('bob');
    expect(get(oneOfPeople, '[2].title')).toBe('dave');
  });

  `Testing Transclusion of multiple selectable record objects (ListReference)
    To select a list of multiple record objects, use the ListReference type.
    E.g: A list of team members could be populated.
    Note that the UUID of the object is also stored to uniquely identify the object.`
    it('should load a "team" schema with a members list to be populated by a list of "person" records from the database', async () => {
      // Arrange:

      const teamSchema = [
        {
          "uuid": "4368f974-d9cf-4d37-af6a-6f3147935dbe",
          "adapterName": "schemas",
          "schemaName": "schemas",
          "data": {
            "uuid": "4368f974-d9cf-4d37-af6a-6f3147935dbe",
            "properties": [
              {
                "key": "name",
                "title": "Team name",
                "type": "Text"
              },
              {
                "key": "members",
                "title": "Members",
                "type": "ListReference",
                "config": "person"
              }
            ],
            "name": "team",
            "description": "team",
            "label": "name"
          },
          "label": "team"
        }
      ];
      // Mock the database calls
      spyOn(component, 'loadSchemaFromDatabase').and.callFake(async (schemaName) => {
        if (schemaName === 'team') {
          return teamSchema;
        }
        if (schemaName === 'person') {
          return personSchema;
        }
      });
      spyOn(component, 'loadRecords').and.callFake(async (schemaName) => {
        if (schemaName === 'person') {
          return personRecords;
        }
      });
  
      // Act:

      component.onConfigUpdate({ schema: 'team' });
      await component.onData({}, false);
  
      // Assert:

      const members = get(component.lastOutput, 'jsonSchema.definitions.team.properties.members.items.oneOf');
      expect(members).toBeDefined();
      // Jill, bob and dave are the name values, represented as oneOf titles:
      expect(get(members, '[0].title')).toBe('Jill');
      expect(get(members, '[1].title')).toBe('bob');
      expect(get(members, '[2].title')).toBe('dave');
    });
});