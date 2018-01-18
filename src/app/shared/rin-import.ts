import { parseString } from 'xml2js';

import {
    get,
    has,
    map,
    mapKeys,
    mapValues,
    omit,
    set
} from 'lodash';

const RIN = 'rin:RecordingInformationNotification';

const RIN_PARTY__PARTY_NAME = 'PartyName.0.FullName.0';
const RIN_PARTY__PARTY_ISNI = 'PartyId.0.ISNI.0';
const RIN_PARTY__PARTY_NAME_INDEXED = 'PartyName.0.FullNameIndexed.0';

function mapTitleArray(titles): any {
    return map(titles,
        t => ({
            TitleType: get(t, '$.TitleType'),
            TitleText: get(t, 'TitleText.0'),
            SubTitle: get(t, 'SubTitle.0')
        }));
}

function flatArrayValues(names): any {
    return mapValues(names, n => get(n, '0'));
}

const seqToArray = tx => values => mapValues(
    mapKeys(values, (v, k) => get(v, '$.SequenceNumber')),
    v => tx(omit(v, '$')));

function getContributors(item, refPath): Array<any> {
    const refs = get(item, 'ContributorReference', []);

    return (has(refs, '0.$.SequenceNumber'))
        ? seqToArray(flatArrayValues)(refs) as any[]
        : map(refs, r => flatArrayValues(r));
}

const mapTerritoryCode = address =>
    set(address, 'TerritoryCode',
        map(get(address, 'TerritoryCode'), a => get(a, '_')));

const mapAddress = addresses =>
    seqToArray(v => flatArrayValues(mapTerritoryCode(v)))(addresses);

function getTerritoryCode(territory): any {
    return { [get(territory, '$.IdentifierType')]: get(territory, '_') };
}

const RIN_ENTITY_LISTS = {
    parties: {
        entityListPath: `${RIN}.PartyList.0.Party`,
        entityIdPath: 'PartyReference.0',
        mapping: party => ({
            PartyName: flatArrayValues(get(party, 'PartyName.0', [])),
            IsOrganization: get(party, 'IsOrganization.0', 'false') === 'true',
            PartyId: flatArrayValues(get(party, 'PartyId.0')),
            EmailAddress: seqToArray(v => get(v, '_'))(get(party, 'EmailAddress')),
            PhoneNumber: seqToArray(v => get(v, '_'))(get(party, 'PhoneNumber')),
            PostalAddress: mapAddress(get(party, 'PostalAddress'))
        })
    },
    soundRecordings: {
        entityListPath: `${RIN}.ResourceList.0.SoundRecording`,
        entityIdPath: 'ResourceReference.0',
        mapping: resource => ({
            // debug: resource,
            Contributors: getContributors(resource, 'SoundRecordingContributorReference.0'),
            MainArtist: get(resource, 'MainArtist.0'),
            MusicalWork: get(resource, 'SoundRecordingMusicalWorkReference.0'),
            Session: get(resource, 'SoundRecordingSessionReference'),
            Type: get(resource, 'SoundRecordingType.0'),
            Version: get(resource, 'SoundRecordingVersion.0'),
            Title: mapTitleArray(get(resource, 'Title', []))
        })
    },
    sessions: {
        entityListPath: `${RIN}.SessionList.0.Session`,
        entityIdPath: 'SessionReference.0',
        mapping: session => ({
            // debug: session,
            SessionType: get(session, 'SessionType.0'),
            StartDateTime: get(session, 'StartDateTime.0'),
            EndDateTime: get(session, 'EndDateTime.0'),
            VenueName: get(session, 'VenueName.0'),
            TerritoryCode: getTerritoryCode(get(session, 'TerritoryCode.0')),
            VenueRoom: get(session, 'VenueRoom.0'),
            IsUnionSession: get(session, 'IsUnionSession.0'),
            IsAnalogSession: get(session, 'IsAnalogSession.0'),
            Comment: get(session, 'Comment.0'),
            Contributors: getContributors(session, 'SessionContributorReference.0'),
            SoundRecordings: get(session, 'SessionSoundRecordingReference')
        })
    },
    musicalWorks: {
        entityListPath: `${RIN}.MusicalWorkList.0.MusicalWork`,
        entityIdPath: 'MusicalWorkReference.0',
        mapping: work => ({
            Comment: get(work, 'Comment.0'),
            MusicalWorkReference: get(work, 'MusicalWorkReference.0'),
            MusicalWorkType: get(work, 'MusicalWorkType.0'),
            Title: mapTitleArray(get(work, 'Title', [])),
            Contributors: getContributors(work, 'MusicalWorkContributorReference.0')
        })
    },
    projects: {
        entityListPath: `${RIN}.ProjectList.0.Project`,
        entityIdPath: 'ProjectReference.0',
        mapping: project => ({
            // debug: project,
            ProjectArtist: get(project, 'ProjectArtist.0'),
            ProjectName: get(project, 'ProjectName.0'),
            Comment: get(project, 'Comment.0'),
            MainArtist: get(project, 'MainArtist.0'),
            Label: get(project, 'Label.0'),
            // TODO: custom role / multiple contributor role types
            Contributors: getContributors(project, 'ProjectContributorReference.0')
        })
    }
};

export function rinXmlToJs(xml: string): Promise<any> {
    return new Promise((resolve, reject) => {
        parseString(xml, (err, result) => {
            if (err) {
                reject(err);

                return;
            }

            // console.log(result);
            const entries = {};

            map(RIN_ENTITY_LISTS, ({entityListPath, entityIdPath, mapping}, entityType) => {
                const entities = get(result, entityListPath as string, []);
                map(entities, entity => {
                    const entityId = get(entity, entityIdPath as string);
                    set(entries, `${entityType}.${entityId}`, mapping(entity));
                });
            });

            // console.log(entries);
            resolve(entries);
        });
    });
}
