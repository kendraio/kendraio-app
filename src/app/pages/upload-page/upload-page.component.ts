import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../../services/page-title.service';
import {from, interval} from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  adapters$;
  uploadStatus = {};
  uploadEnabled = {};

  isUploading = false;
  enabled = {
    bloomen: true,
    mixcloud: true,
    ddex: true,
    'copyright-hub': true,
    unsplash: true,
    dotbc: true,
    chant: true,
    'apple-music': true,
    youtube: true,
    teosto: true,
    spotify: true,
    schema: true,
    'ppl-ipn': true,
    bandcamp: true,
    'm-rin': true,
    example: true,
    resonate: true,
    tidal: true,
    omi: true,
    kendraio: true,
    soundcloud: true
  };

  constructor(
    private readonly pageTitle: PageTitleService,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.pageTitle.setTitle('Upload');
    this.adapters$ = from([
      {
        'bloomen': {
          'adapter': {
            'name': 'bloomen',
            'title': 'Bloomen',
            'description': 'Integration with the Bloomen project',
            'infoUrl': 'http://bloomen.io/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true,
            'swagger': 'extra/bloomen/api-docs.json',
            'database': [
              'extra/bloomen/schemas/user.schema.json',
              'extra/bloomen/schemas/photo.schema.json'
            ],
            'forms': {
              'musicalWork': {
                'jsonSchema': 'extra/bloomen/schemas/musicalWork.schema.json',
                'uiSchema': 'extra/bloomen/schemas/musicalWork.ui.json'
              },
              'soundRecording': {
                'jsonSchema': 'extra/bloomen/schemas/soundRecording.schema.json',
                'uiSchema': 'extra/bloomen/schemas/soundRecording.ui.json'
              },
              'user': {
                'jsonSchema': 'extra/bloomen/schemas/user.schema.json',
                'uiSchema': 'extra/bloomen/schemas/user.ui.json'
              },
              'photo': {
                'jsonSchema': 'extra/bloomen/schemas/photo.schema.json',
                'uiSchema': 'extra/bloomen/schemas/photo.ui.json'
              }
            },
            'queries': [
              'extra/bloomen/queries/listSoundRecordings.json',
              'extra/bloomen/queries/listMusicalWorks.json',
              'extra/bloomen/queries/chartReleases.json'
            ],
            'configs': [
              'extra/bloomen/configs/listSoundRecordings.json',
              'extra/bloomen/configs/listMusicalWorks.json',
              'extra/bloomen/configs/chartReleases.json',
              'extra/bloomen/configs/editSoundRecording.json',
              'extra/bloomen/configs/messageExample.json',
              'extra/bloomen/configs/templateExample.json',
              'extra/bloomen/configs/dialogExample.json',
              'extra/bloomen/configs/bloomenApiJwt-musicalWorks.json',
              'extra/bloomen/configs/bloomenApiJwt-soundRecordings.json',
              'extra/bloomen/configs/bloomenApiJwt-exportMusicalWorks.json',
              'extra/bloomen/configs/photo-search-example.json',
              'extra/bloomen/configs/importMusicalWorks.json',
              'extra/bloomen/configs/listSoundRecordings-view-edit.json'
            ]
          }
        },
        'mixcloud': {
          'adapter': {
            'name': 'mixcloud',
            'title': 'MixCloud',
            'description': 'Upload your mix, radio show or Podcast to Mixcloud for free',
            'infoUrl': 'https://www.mixcloud.com/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'ddex': {
          'adapter': {
            'name': 'ddex',
            'title': 'DDEX',
            'description': 'Implementation of schemas for DDEX messages',
            'infoUrl': 'https://ddex.net/',
            'maintainer': 'Kendraio',
            'supportUrl': 'https://kendra.io',
            'uploads': false,
            'configs': [
              'extra/ddex/ern4-import.json'
            ]
          }
        },
        'copyright-hub': {
          'adapter': {
            'name': 'copyright-hub',
            'title': 'Copyright Hub',
            // tslint:disable-next-line:max-line-length
            'description': 'The Copyright Hub aims to help copyright work the way the internet works by making the process of giving and getting permission – the basic building block of the copyright process – fit for purpose in the age of the Internet.',
            'infoUrl': 'http://www.copyrighthub.org',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'unsplash': {
          'adapter': {
            'name': 'unsplash',
            'title': 'Unsplash',
            // tslint:disable-next-line:max-line-length
            'description': 'Beautiful high quality free images and photos you can download and use for any project. No attribution required.',
            'infoUrl': 'https://unsplash.com/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true,
            'swagger': 'extra/unsplash/swagger.json'
          }
        },
        'dotbc': {
          'adapter': {
            'name': 'dotbc',
            'title': 'dotBC',
            'description': 'dotBC is a new dynamic file format and supporting technology architecture, ' +
              'designed to modernize rights management of media files globally for all participants',
            'infoUrl': 'https://dotblockchainmusic.com/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'chant': {
          'adapter': {
            'name': 'chant',
            'title': 'Chant',
            'description': 'An adapter for Chant specific features',
            'infoUrl': 'https://chant.world/',
            'maintainer': 'Kendraio',
            'supportUrl': 'https://www.kendra.io',
            'uploads': true,
            'forms': {
              'gig': {
                'jsonSchema': 'extra/chant/schemas/gig.json',
                'uiSchema': 'extra/chant/schemas/gig-ui.json'
              },
              'chant': {
                'jsonSchema': 'extra/chant/schemas/chant.json',
                'uiSchema': 'extra/chant/schemas/chant-ui.json'
              }
            },
            'actions': [
              {
                'title': 'Add/Edit Gig',
                'path': 'extra/chant/workflow/edit-gig.txt'
              },
              {
                'title': 'Upload Chant',
                'path': 'extra/chant/workflow/upload-chant.txt'
              }
            ]
          }
        },
        'apple-music': {
          'adapter': {
            'name': 'apple-music',
            'title': 'Apple Music',
            'description': 'Stream 45 million songs, ad-free on Apple Music. Shop HomePod, ' +
              'AirPods and headphones. And build your entertainment collection with iPod and iTunes.',
            'infoUrl': 'https://www.apple.com/uk/music/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'youtube': {
          'adapter': {
            'name': 'youtube',
            'title': 'YouTube',
            'description': 'Enjoy the videos and music you love, upload original content,' +
              ' and share it all with friends, family, and the world on YouTube.',
            'infoUrl': 'https://www.youtube.com/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true,
            'forms': {
              'basic': {
                'jsonSchema': 'extra/youtube/schemas/youtube-edit-video-basic.json',
                'uiSchema': 'extra/youtube/schemas/youtube-edit-video-basic-ui.json'
              },
              'advanced': {
                'jsonSchema': 'extra/youtube/schemas/youtube-edit-video-advanced.schema.json',
                'uiSchema': 'extra/youtube/schemas/youtube-edit-video-advanced.ui.json'
              }
            }
          }
        },
        'teosto': {
          'adapter': {
            'name': 'teosto',
            'title': 'Teosto',
            'description': 'Teosto is a non-profit performance rights organization that collects' +
              ' royalties on behalf of songwriters and composers in Finland.',
            'infoUrl': 'https://www.teosto.fi/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': false,
            'configs': [
              'extra/teosto/configs/listWorks.json',
              'extra/teosto/configs/authorsWorksByName.json',
              'extra/teosto/configs/authorsWorksFromIPI.json',
              'extra/teosto/configs/getRightsHolderForISWC.json',
              'extra/teosto/configs/listPublishersWorks.json',
              'extra/teosto/configs/listWorksSelectionExample.json'
            ]
          }
        },
        'spotify': {
          'adapter': {
            'name': 'spotify',
            'title': 'Spotify',
            'description': 'Spotify is a digital music service that gives you access to millions of songs.',
            'infoUrl': 'https://www.spotify.com/uk/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'schema': {
          'adapter': {
            'name': 'schema',
            'title': 'schema.org',
            'description': 'Schema.org is a collaborative, community activity with a mission to create, ' +
              'maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.',
            'infoUrl': 'https://schema.org/',
            'maintainer': 'Kendraio',
            'supportUrl': 'https://www.kendra.io',
            'uploads': false,
            'forms': {
              'addImage': {
                'jsonSchema': 'extra/schema.org/schemas/imageObject.json',
                'uiSchema': 'extra/schema.org/schemas/addImage-ui.json'
              },
              'editImage': {
                'jsonSchema': 'extra/schema.org/schemas/imageObject.json',
                'uiSchema': 'extra/schema.org/schemas/editImage-ui.json'
              }
            },
            'rootNodeTypes': [],
            'nodeTypes': [
              'Person',
              'ImageObject'
            ],
            'linkTypes': []
          },
          'schemas': {
            'Person': {
              'context': 'http://schema.org',
              'type': 'Person',
              'label': 'Person',
              'icon': 'person',
              'fields': [
                {
                  'name': 'name',
                  'label': 'Name',
                  'type': 'string',
                  'widget': 'textfield'
                }
              ]
            },
            'ImageObject': {
              'context': 'http://schema.org',
              'type': 'ImageObject',
              'label': 'Image',
              'icon': 'photo_camera',
              'labelField': 'contentUrl',
              'fields': [
                {
                  'name': 'contentUrl',
                  'label': 'Image URL',
                  'type': 'string',
                  'widget': 'imageTagger',
                  'required': true,
                  'widthField': 'width',
                  'heightField': 'height'
                },
                {
                  'name': 'name',
                  'label': 'Filename',
                  'type': 'string',
                  'widget': 'textfield'
                },
                {
                  'name': 'description',
                  'label': 'Description',
                  'widget': 'textarea'
                },
                {
                  'name': 'url',
                  'label': 'Source URL',
                  'type': 'string',
                  'widget': 'textfield',
                  'required': true
                },
                {
                  'name': 'width',
                  'label': 'Width',
                  'type': 'integer',
                  'widget': 'hidden'
                },
                {
                  'name': 'height',
                  'label': 'Height',
                  'type': 'integer',
                  'widget': 'hidden'
                }
              ]
            }
          }
        },
        'ppl-ipn': {
          'adapter': {
            'name': 'ppl-ipn',
            'title': 'PPL IPN',
            'description': 'Verification of International Performer Number (IPN) for PPL members',
            'infoUrl': 'https://www.ppluk.com/membership/more-information/ipn/',
            'maintainer': 'Kendraio',
            'supportUrl': 'https://www.kendra.io',
            'uploads': false,
            'actions': [
              {
                'title': 'PPL IPN Process',
                'path': 'extra/ppl-ipn/ipn.txt'
              }
            ],
            'forms': {
              'ipn': {
                'jsonSchema': 'extra/ppl-ipn/schemas/ipn-jsonSchema.json',
                'uiSchema': 'extra/ppl-ipn/schemas/ipn-uiSchema.json'
              }
            }
          }
        },
        'bandcamp': {
          'adapter': {
            'name': 'bandcamp',
            'title': 'Bandcamp',
            'description': 'Discover amazing music and directly support the artists who make it.',
            'infoUrl': 'https://bandcamp.com/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'm-rin': {
          'adapter': {
            'name': 'm-rin',
            'title': 'Recording Information Notification (RIN)',
            'description': 'This adapter defines the schema and parser for the DDEX M-RIN (Minimum) ' +
              'Recording Information Notification standard.\nThis adapter enables support for import ' +
              'and export of M-RIN data, as well as the core entities for storage of projects, people,' +
              ' recordings, and works.\n',
            'infoUrl': 'http://www.ddex.net/recording-information-notification-rin',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'source': {
              'parser': 'xml',
              'parserConfig': {
                'arrayAccessFormPaths': [
                  '.\\.Party$',
                  '.\\.PostalAddress$',
                  '.\\.PhoneNumber$',
                  '.\\.EmailAddress$',
                  '.\\.MusicalWork$',
                  '.\\.SoundRecording$',
                  '.\\.Project$',
                  '.\\.Session$',
                  '.\\.SoundRecordingSessionReference$',
                  '.\\.ContributorReference$',
                  '.\\.SessionSoundRecordingReference$'
                ]
              },
              'extractor': 'extractor.jmespath'
            },
            'rootNodeType': 'Project',
            'nodeTypes': [
              'Project',
              'Party',
              'MusicalWork',
              'Session',
              'Resource'
            ],
            'linkTypes': [
              'ContributorReference',
              'MainArtist',
              'Label'
            ],
            'schemas': {
              'Project': {
                'options': {
                  'labelField': 'name'
                },
                'properties': {
                  'name': {
                    'type': 'string',
                    'options': {
                      'label': 'Name'
                    }
                  },
                  'artist': {
                    'type': 'string',
                    'options': {
                      'label': 'Artist Name'
                    }
                  },
                  'comment': {
                    'type': 'string',
                    'options': {
                      'fieldType': 'TEXTAREA',
                      'label': 'Comment'
                    }
                  }
                },
                'links': [
                  'MainArtist',
                  'Label',
                  'ContributorReference'
                ]
              },
              'Party': {
                'options': {
                  'labelField': 'FullName'
                },
                'properties': {
                  'FullName': {
                    'type': 'string'
                  },
                  'FullNameIndexed': {
                    'type': 'string'
                  },
                  'ISNI': {
                    'type': 'string'
                  },
                  'IsOrganization': {
                    'type': 'boolean',
                    'options': {
                      'fieldType': 'SWITCH'
                    }
                  }
                }
              },
              'MusicalWork': {
                'options': {
                  'labelField': 'name'
                },
                'properties': {
                  'name': {
                    'type': 'string'
                  },
                  'Comment': {
                    'type': 'string',
                    'options': {
                      'fieldType': 'TEXTAREA'
                    }
                  }
                }
              },
              'ContributorReference': {
                'properties': {
                  'role': {
                    'type': 'string'
                  }
                }
              }
            }
          },
          'schemas': {
            'Party': {
              'name': 'Party',
              'description': 'A Composite containing details of a Party.',
              'id': 'm-rin:Party',
              'type': 'object',
              'required': [
                'PartyId',
                'PartyReference',
                'IsOrganization'
              ],
              'properties': {
                'PartyId': {
                  'description': 'A Composite containing details of the PartyId for the Party. ' +
                    'If no Namespace is given, the Identifier is a DdexPartyId (DPID). ' +
                    'Note that DPIDs are not normally used to identify Artists, producers or other Creators.\n',
                  'type': 'array',
                  'minItems': 1,
                  'items': {
                    '$ref': 'm-rin:DetailedPartyId'
                  }
                },
                'PartyReference': {
                  'description': 'The Identifier (specific to the Message) of the Party. This is' +
                    ' a LocalPartyAnchor starting with the letter P.\n',
                  'type': 'string',
                  'pattern': '^P[\\d\\-_a-zA-Z]+$'
                },
                'PartyName': {
                  'description': 'A Composite containing details of the PartyName(s).',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:PartyName'
                  }
                },
                'Publisher': {
                  'type': 'array',
                  'description': 'A Composite containing details of the MusicPublisher the Party is signed to.',
                  'items': {
                    '$ref': 'm-rin:Affiliation'
                  }
                },
                'AuthorsSociety': {
                  'type': 'array',
                  'description': 'A Composite containing details of the AuthorsSociety the Party is a member of.',
                  'items': {
                    '$ref': 'm-rin:Affiliation'
                  }
                },
                'Label': {
                  'description': 'A Composite containing details of the Label the Party is signed to.',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:Affiliation'
                  }
                },
                'MusicLicensingCompany': {
                  'description': 'A Composite containing details of the MusicLicensingCompany the Party is a member of.',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:Affiliation'
                  }
                },
                'Sex': {
                  '$ref': 'avs:Sex',
                  'description': 'The sex of the Party.'
                },
                'TerritoryOfResidency': {
                  '$ref': 'm-rin:AllTerritoryCode',
                  'description': 'The country of main residency of the Party.'
                },
                'GoverningAgreementType': {
                  '$ref': 'm-rin:GoverningAgreementType',
                  'description': 'A Composite containing details of a Type of an agreement that ' +
                    'covers the Party\'s participation in making a SoundRecording.'
                },
                'ArtistDelegatedUsageRights': {
                  '$ref': 'm-rin:ArtistDelegatedUsageRights',
                  'description': 'A Composite containing details of the kinds of usage for which' +
                    ' rights have been delegated by the Party.'
                },
                'IsOrganization': {
                  'description': 'A Flag indicating whether the Party is an Organization (=true) or a Person (=false).',
                  'type': 'boolean'
                },
                'PostalAddress': {
                  'description': 'A Composite containing details of a PostalAddress of the Party.',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:PostalAddress'
                  }
                },
                'PhoneNumber': {
                  'description': 'A Composite containing details of a PhoneNumber of the Party.',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:PhoneNumber'
                  }
                },
                'EmailAddress': {
                  'description': 'A Composite containing details of an EmailAddress of the Party.',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:EmailAddress'
                  }
                },
                'Nationality': {
                  '$ref': 'm-rin:CurrentTerritoryCode',
                  'description': 'The nationality of the Party.'
                },
                'DateAndPlaceOfBirth': {
                  '$ref': 'm-rin:EventDate',
                  'description': 'A Composite containing details of the Date and Place of birth. ' +
                    'This is a string with the syntax YYYY[-MM[-DD]].'
                },
                'DateAndPlaceOfDeath': {
                  '$ref': 'm-rin:EventDate',
                  'description': 'A Composite containing details of the Date and Place of death. This ' +
                    'is a string with the syntax YYYY[-MM[-DD]].'
                }
              }
            },
            'ProprietaryId': {
              'name': 'ProprietaryId',
              'description': 'A Composite containing details of a ProprietaryIdentifier.',
              'id': 'm-rin:ProprietaryId',
              'type': 'object',
              'required': [
                'ProprietaryId',
                'Namespace'
              ],
              'properties': {
                'ProprietaryId': {
                  'type': 'string'
                },
                'Namespace': {
                  'description': 'The Namespace of the ProprietaryIdentifier. This is represented in an' +
                    ' XML schema as an XML Attribute.',
                  'type': 'string'
                }
              }
            },
            'PartyName': {
              'name': 'PartyName',
              'description': 'A Composite containing details of a PartyName. Name details for a Party ' +
                'typically either contain a FullName or a KeyName.\n',
              'id': 'm-rin:PartyName',
              'type': 'object',
              'required': [
                'FullName'
              ],
              'properties': {
                'FullName': {
                  '$ref': 'm-rin:Name',
                  'description': 'A Composite containing the complete Name of the Party, in its normal ' +
                    'form of presentation (e.g. John H. Smith, Acme Music Inc, the Beatles).'
                },
                'FullNameAsciiTranscribed': {
                  'type': 'string',
                  'description': 'The FullName transcribed using 7-bit ASCII code.'
                },
                'FullNameIndexed': {
                  '$ref': 'm-rin:Name',
                  'description': 'A Composite containing the complete Name of the Party in the form in ' +
                    'which it normally appears in an alphabetic index, with the KeyName first (e.g. Smith,' +
                    ' John H.; Beatles, The).'
                },
                'NamesBeforeKeyName': {
                  '$ref': 'm-rin:Name',
                  'description': 'A Composite containing the Name(s) preceding the KeyName in the ' +
                    'FullName (and that is placed after it in a FullNameIndexed). Examples: \'George\' ' +
                    'in \'George Michael\'; \'John Fitzgerald\' in \'John Fitzgerald Kennedy\'. ' +
                    'Not all PartyNames have a NamesBeforeKeyName (e.g. Madonna, EMI Music Inc).'
                },
                'KeyName': {
                  '$ref': 'm-rin:Name',
                  'description': 'A Composite containing the Part of a Name of the Party normally used to' +
                    ' index an entry in an alphabetical list, such as \'Smith\' (in John Smith) or' +
                    ' \'Garcia Marquez\' or \'Madonna\' or \'Francis de Sales\' (in Saint Francis de Sales). ' +
                    'For persons, this normally corresponds to the \'family name\' or names, which in ' +
                    'Western name forms usually comes as a surname at the end of a FullName, and in Asian ' +
                    'name forms often at the beginning of a FullName.'
                },
                'NamesAfterKeyName': {
                  '$ref': 'm-rin:Name',
                  'description': 'A Composite containing the Name(s) following the KeyName.' +
                    ' Example:\'Ibrahim\' (in Anwar Ibrahim). This is common, e.g., in many Asian ' +
                    'personal name forms where a FullName begins with the KeyName, which is followed ' +
                    'by other names.'
                },
                'AbbreviatedName': {
                  '$ref': 'm-rin:Name',
                  'description': 'A Composite containing a short version of the PartyName (e.g. for use' +
                    ' on devices with a small display).'
                },
                'LanguageAndScriptCode': {
                  'type': 'string',
                  'description': 'The Language and script for the Elements of the PartyName as ' +
                    'defined in IETF RfC 5646. The default is the same as indicated for the containing ' +
                    'composite. Language and Script are provided as lang[-scipt][-region][-variant]. ' +
                    'This is represented in an XML schema as an XML Attribute.'
                }
              }
            },
            'DetailedPartyId': {
              'name': 'DetailedPartyId',
              'description': 'A Composite containing details of a PartyId.',
              'id': 'm-rin:DetailedPartyId',
              'type': 'object',
              'properties': {
                'ISNI': {
                  'description': 'An International Standard Name Identifier, the ISO 27729 Standard ' +
                    'Identifier for names. DDEX will enforce the syntax [0-9]{15}[X0-9] using XML ' +
                    'Schema in the future.\n',
                  'type': 'string'
                },
                'DPID': {
                  'description': 'An Identifier of a Party according to the DdexPartyId standard DDEX-DPID.',
                  'type': 'string',
                  'pattern': 'PADPIDA[a-zA-Z0-9]+'
                },
                'IpiNameNumber': {
                  'description': 'An Interested Party Identifier, a CISAC standard Identifier.',
                  'type': 'string'
                },
                'IPN': {
                  'description': 'An International Performer Number, an IPDA Identifier (http://www2.ipddb.org/content/ipd-project).\n',
                  'type': 'string'
                },
                'CisacSocietyId': {
                  'description': 'A CISAC Society Identifier, a CISAC standard Identifier for music rights societies.',
                  'type': 'string'
                },
                'ProprietaryId': {
                  'description': 'A Composite containing details of a ProprietaryIdentifier of the Party.',
                  'type': 'array',
                  'items': {
                    '$ref': 'm-rin:ProprietaryId'
                  }
                }
              }
            },
            'Name': {
              'name': 'Name',
              'description': 'A Composite containing details of a Name.',
              'id': 'm-rin:Name',
              'type': 'object',
              'required': [
                'Name'
              ],
              'properties': {
                'Name': {
                  'type': 'string'
                },
                'LanguageAndScriptCode': {
                  'type': 'string',
                  'description': 'The Language and script of the Name as defined in IETF RfC 5646. ' +
                    'The default is the same as indicated for the containing composite. Language and ' +
                    'Script are provided as lang[-scipt][-region][-variant]. This is represented in ' +
                    'an XML schema as an XML Attribute.'
                }
              }
            }
          }
        },
        'example': {
          'adapter': {
            'name': 'example',
            'title': 'Example',
            'description': 'An adapter for examples and demonstrations.',
            'infoUrl': 'https://www.example.com/',
            'maintainer': 'Kendraio',
            'supportUrl': 'https://www.kendra.io',
            'uploads': false,
            'configs': [
              'extra/example/configs/productChart.json',
              'extra/example/configs/customFormElements.json'
            ],
            'forms': {
              'customElements': {
                'jsonSchema': 'extra/example/schemas/customElements.schema.json',
                'uiSchema': 'extra/example/schemas/customElements.ui.json'
              }
            }
          }
        },
        'resonate': {
          'adapter': {
            'name': 'resonate',
            'title': 'Resonate',
            'description': 'Resonate Co-operative is a community owned music streaming platform',
            'infoUrl': 'https://resonate.is/',
            'maintainer': 'Resonate',
            'supportUrl': 'https://kendra.io/'
          }
        },
        'tidal': {
          'adapter': {
            'name': 'tidal',
            'title': 'TIDAL',
            'description': 'TIDAL is the first music service with High Fidelity sound quality, ' +
              'High Definition music videos and Curated Editorial, expertly crafted by music journalists.',
            'infoUrl': 'http://tidal.com/gb',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'omi': {
          'adapter': {
            'name': 'omi',
            'title': 'OMI',
            'description': 'We are a non-profit initiative creating an open-source protocol for ' +
              'the uniform identification of music rights holders and creators.',
            'infoUrl': 'http://open-music.org/',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        },
        'kendraio': {
          'adapter': {
            'name': 'kendraio',
            'title': 'Kendraio',
            'description': 'An adapter for Kendraio specific features',
            'infoUrl': 'https://www.kendra.io/',
            'maintainer': 'Kendraio',
            'supportUrl': 'https://www.kendra.io',
            'uploads': false,
            'database': [
              'extra/kendraio/schemas/music_recording.schema.json',
              'extra/kendraio/schemas/music_work.schema.json',
              'extra/kendraio/schemas/file.schema.json'
            ],
            'forms': {
              'edit_music_recording': {
                'jsonSchema': 'extra/kendraio/schemas/music_recording.schema.json',
                'uiSchema': 'extra/kendraio/schemas/music_recording.ui.json'
              },
              'edit_music_work': {
                'jsonSchema': 'extra/kendraio/schemas/music_work.schema.json',
                'uiSchema': 'extra/kendraio/schemas/music_work.ui.json'
              },
              'edit_file': {
                'jsonSchema': 'extra/kendraio/schemas/file.schema.json',
                'uiSchema': 'extra/kendraio/schemas/file.ui.json'
              }
            },
            'queries': [
              'extra/kendraio/queries/listRecordings.json'
            ],
            'actions': [
              {
                'title': 'Claim Workflow States',
                'path': 'extra/kendraio/flow-chart.txt'
              },
              {
                'title': 'Rights Claim',
                'path': 'extra/kendraio/sequence.txt'
              },
              {
                'title': 'Claim object states',
                'path': 'extra/kendraio/claim-process-states.txt'
              },
              {
                'title': 'Adapter API example',
                'path': 'extra/kendraio/adapter-api-form-example.txt'
              }
            ],
            'configs': [
              'extra/kendraio/configs/listRecordings.json',
              'extra/kendraio/configs/bulkOperationsExample.json',
              'extra/kendraio/configs/fakerTest.json'
            ]
          },
          'schemas': {
            'InclusionRelationship': {
              'context': 'https://kendra.io/schema-v1',
              'type': 'InclusionRelationship',
              'label': 'Tag',
              'icon': 'label',
              'sourceNodeTypes': [
                'ImageObject'
              ],
              'targetNodeTypes': [
                'Person'
              ],
              'fields': [
                {
                  'name': 'visibility',
                  'label': 'Visibility',
                  'type': 'string',
                  'widget': 'select',
                  'options': [
                    'Public',
                    'Private',
                    'Custom'
                  ]
                },
                {
                  'name': 'boundingBox',
                  'label': 'Region',
                  'type': 'region',
                  'widget': 'none'
                }
              ]
            }
          }
        },
        'soundcloud': {
          'adapter': {
            'name': 'soundcloud',
            'title': 'SoundCloud',
            'description': 'Testing additional adapter',
            'infoUrl': 'http://soundcloud.com',
            'maintainer': 'Kendraio',
            'supportUrl': 'http://kendra.io',
            'uploads': true
          }
        }
      }
    ]);
    this.uploadEnabled = {
      bloomen: true,
      mixcloud: true,
      ddex: true,
      'copyright-hub': true,
      unsplash: true,
      dotbc: true,
      chant: true,
      'apple-music': true,
      youtube: true,
      teosto: true,
      spotify: true,
      schema: true,
      'ppl-ipn': true,
      bandcamp: true,
      'm-rin': true,
      example: true,
      resonate: true,
      tidal: true,
      omi: true,
      kendraio: true,
      soundcloud: true
    };
  }

  doUpload() {
    if (Object.keys(this.uploadEnabled).filter(key => this.uploadEnabled[key]).length === 0) {
      return;
    }
    Object.keys(this.uploadEnabled).forEach(key => {
      this.uploadStatus[key] = 0;
    });
    forkJoin(Object.keys(this.uploadEnabled)
        .filter(key => this.uploadEnabled[key])
        .map(key => interval(Math.random() * 30).pipe(
          tap(() => this.uploadStatus[key] += 1),
          take(100)
        ))).subscribe(() => {
          const message = 'Upload complete';
          this.snackBar.open(message, 'OK', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
          this.isUploading = false;
    });
    this.isUploading = true;
  }
}
